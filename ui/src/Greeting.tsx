import {
  useDAppKit,
  useCurrentClient,
} from "@mysten/dapp-kit-react";
import { Transaction } from "@mysten/sui/transactions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNetworkVariable } from "./networkConfig";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { panelClassName, primaryButtonClassName, textInputClassName } from "./ui";

export function Greeting({ id }: { id: string }) {
  const helloWorldPackageId = useNetworkVariable("helloWorldPackageId");
  const client = useCurrentClient();
  const dAppKit = useDAppKit();
  const queryClient = useQueryClient();

  const { mutate: signAndExecute } = useMutation({
    mutationFn: (tx: Transaction) =>
      dAppKit.signAndExecuteTransaction({ transaction: tx }),
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["getObject", id],
    queryFn: () =>
      client.core.getObject({ objectId: id, include: { json: true } }),
  });

  const [newText, setNewText] = useState("");
  const [waitingForTxn, setWaitingForTxn] = useState(false);

  const executeMoveCall = () => {
    setWaitingForTxn(true);

    const tx = new Transaction();

    tx.moveCall({
      target: `${helloWorldPackageId}::greeting::update_text`,
      arguments: [tx.object(id), tx.pure.string(newText)],
    });

    signAndExecute(tx, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getObject", id] });
        setWaitingForTxn(false);
        setNewText("");
      },
    });
  };

  if (isPending) return <p className="text-slate-300">Loading...</p>;

  if (error) return <p className="text-rose-300">Error: {error.message}</p>;

  if (!data) return <p className="text-slate-300">Not found</p>;

  const fields = data.object.json as { text: string } | null;
  const inputPlaceholder =
    fields?.text || "Write a new greeting for this object";
  const objectLink = `https://testnet.suivision.xyz/object/${id}`;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Greeting Object
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
          Live greeting editor
        </h2>
        <a
          className="w-fit break-all text-sm text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200"
          href={objectLink}
          target="_blank"
          rel="noreferrer"
        >
          {id}
        </a>
      </div>

      <div className={panelClassName}>
        <p className="text-sm text-slate-400">Current text</p>
        <p className="mt-3 text-2xl font-medium tracking-tight text-slate-50">
          {fields?.text || "Empty greeting"}
        </p>
      </div>

      <div className={`${panelClassName} flex flex-col gap-4 sm:flex-row`}>
        <input
          className={`${textInputClassName} flex-1`}
          placeholder={inputPlaceholder}
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
          disabled={waitingForTxn}
        />
        <button
          className={primaryButtonClassName}
          onClick={() => executeMoveCall()}
          disabled={waitingForTxn}
        >
          {waitingForTxn ? <ClipLoader size={20} /> : "Update"}
        </button>
      </div>
    </div>
  );
}
