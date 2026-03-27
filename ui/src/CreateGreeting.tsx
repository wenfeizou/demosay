import { Transaction } from "@mysten/sui/transactions";
import { useDAppKit } from "@mysten/dapp-kit-react";
import { useMutation } from "@tanstack/react-query";
import { useNetworkVariable } from "./networkConfig";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { panelClassName, primaryButtonClassName } from "./ui";

export function CreateGreeting({
  onCreated,
}: {
  onCreated: (id: string) => void;
}) {
  const helloWorldPackageId = useNetworkVariable("helloWorldPackageId");
  const dAppKit = useDAppKit();

  const { mutate: signAndExecute } = useMutation({
    mutationFn: (tx: Transaction) =>
      dAppKit.signAndExecuteTransaction({ transaction: tx }),
  });

  const [waitingForTxn, setWaitingForTxn] = useState(false);

  const create = () => {
    setWaitingForTxn(true);

    const tx = new Transaction();

    tx.moveCall({
      arguments: [],
      target: `${helloWorldPackageId}::greeting::new`,
    });

    signAndExecute(tx, {
      onSuccess: (result) => {
        const txData = result.Transaction ?? result.FailedTransaction;
        if (txData?.effects) {
          const created = txData.effects.changedObjects.filter(
            (obj) => obj.idOperation === "Created",
          );
          const objectId = created[0]?.objectId;
          if (objectId) {
            onCreated(objectId);
          }
        }
        setWaitingForTxn(false);
      },
    });
  };

  return (
    <div className="flex min-h-[24rem] items-center justify-center">
      <div className={`${panelClassName} w-full max-w-xl p-8 text-center shadow-cyan-950/30`}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Greeting Object
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">
          Create your first on-chain greeting
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          This will publish a fresh greeting object to Sui Testnet and open its
          detail view once the transaction confirms.
        </p>
        <button
          className={`${primaryButtonClassName} mt-8 min-w-52 px-6 py-3`}
          onClick={() => {
            create();
          }}
          disabled={waitingForTxn}
        >
          {waitingForTxn ? <ClipLoader size={20} /> : "Create Greeting"}
        </button>
      </div>
    </div>
  );
}
