import { CurrentAccountSigner } from "@mysten/dapp-kit-core";
import type { DAppKit } from "@mysten/dapp-kit-core";
import { useDAppKit, useCurrentAccount, useCurrentClient } from "@mysten/dapp-kit-react";
import { walrus } from "@mysten/walrus";
import { useState } from "react";
import {
  panelClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
  textInputClassName,
} from "../ui";

const DEFAULT_JSON = JSON.stringify(
  {
    type: "text", // "image", "video",
    content: {
      url: "",
      text: "EVE Frontier 由 CCP 开发和运营。CCP Games 已确认，EVE Frontier 将在 Sui 区块链上推出，利用其低延迟性能和可扩展性，实现工作室长期的“永久游戏”愿景。",
    },
    answer: "i get it",
  },
  null,
  2,
);

function formatWalrusError(error: unknown) {
  const rawMessage =
    error instanceof Error ? error.message : "Unknown Walrus error.";
  const upperMessage = rawMessage.toUpperCase();

  const isNodeHealthIssue =
    upperMessage.includes("ERR_CERT_") ||
    upperMessage.includes("CERT_") ||
    upperMessage.includes("NAME_NOT_RESOLVED") ||
    upperMessage.includes("FAILED TO FETCH") ||
    upperMessage.includes("FETCH FAILED") ||
    upperMessage.includes("NETWORKERROR");

  if (isNodeHealthIssue) {
    return "Walrus testnet storage nodes are currently returning TLS/DNS network errors. This is usually a testnet infrastructure issue rather than a problem with your JSON payload.";
  }

  if (upperMessage.includes("UNEXPECTED TOKEN") || upperMessage.includes("JSON")) {
    return `JSON error: ${rawMessage}`;
  }

  return rawMessage;
}

export function WalrusJsonPage() {
  const currentAccount = useCurrentAccount();
  const currentClient = useCurrentClient();
  const dAppKit = useDAppKit();
  const [jsonInput, setJsonInput] = useState(DEFAULT_JSON);
  const [blobIdInput, setBlobIdInput] = useState("");
  const [storedBlobId, setStoredBlobId] = useState("");
  const [loadedJson, setLoadedJson] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const walrusClient = currentClient.$extend(walrus());

  const handleWriteJson = async () => {
    if (!currentAccount) {
      setError("Please connect your wallet first.");
      return;
    }

    try {
      setIsWriting(true);
      setError("");
      setStatus("Encoding JSON and uploading to Walrus...");

      const parsed = JSON.parse(jsonInput);
      const blob = new TextEncoder().encode(JSON.stringify(parsed, null, 2));
      const signer = new CurrentAccountSigner(dAppKit as unknown as DAppKit);

      const { blobId } = await walrusClient.walrus.writeBlob({
        blob,
        deletable: false,
        epochs: 3,
        signer,
      });

      setStoredBlobId(blobId);
      setBlobIdInput(blobId);
      setStatus(`Stored JSON on Walrus. Blob ID: ${blobId}`);
    } catch (writeError) {
      setError(formatWalrusError(writeError));
      setStatus("");
    } finally {
      setIsWriting(false);
    }
  };

  const handleReadJson = async () => {
    if (!blobIdInput.trim()) {
      setError("Please enter a blob ID.");
      return;
    }

    try {
      setIsReading(true);
      setError("");
      setStatus("Reading JSON from Walrus...");

      const bytes = await walrusClient.walrus.readBlob({
        blobId: blobIdInput.trim(),
      });

      const text = new TextDecoder("utf-8").decode(bytes);
      const parsed = JSON.parse(text);

      setLoadedJson(JSON.stringify(parsed, null, 2));
      setStatus("Loaded JSON from Walrus successfully.");
    } catch (readError) {
      setError(formatWalrusError(readError));
      setStatus("");
    } finally {
      setIsReading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Walrus Storage
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
          Store JSON on Walrus
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          This demo uses your connected wallet to write JSON data to Walrus on Sui Testnet, then
          reads it back by blob ID.
        </p>
      </div>

      <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5 text-sm leading-6 text-amber-100 shadow-lg shadow-amber-950/10">
        Walrus testnet may intermittently fail at the storage-node layer. Browser console errors
        such as certificate invalid, certificate date invalid, or DNS resolution failure usually
        indicate unhealthy testnet nodes, not malformed JSON.
      </div>

      <div className={panelClassName}>
        <p className="text-sm text-slate-400">JSON payload</p>
        <textarea
          className={`${textInputClassName} mt-3 min-h-72 w-full py-4 font-mono text-sm`}
          onChange={(event) => {
            setJsonInput(event.target.value);
          }}
          spellCheck={false}
          value={jsonInput}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className={primaryButtonClassName}
            disabled={isWriting}
            onClick={() => {
              void handleWriteJson();
            }}
          >
            {isWriting ? "Writing..." : "Write JSON to Walrus"}
          </button>
        </div>
      </div>

      <div className={panelClassName}>
        <p className="text-sm text-slate-400">Blob ID</p>
        <input
          className={`${textInputClassName} mt-3 w-full`}
          onChange={(event) => {
            setBlobIdInput(event.target.value);
          }}
          placeholder="Enter a Walrus blob ID"
          value={blobIdInput}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className={primaryButtonClassName}
            disabled={isReading}
            onClick={() => {
              void handleReadJson();
            }}
          >
            {isReading ? "Reading..." : "Read JSON from Walrus"}
          </button>
          {storedBlobId && (
            <button
              className={secondaryButtonClassName}
              onClick={() => {
                navigator.clipboard.writeText(storedBlobId).catch(() => undefined);
              }}
            >
              Copy Blob ID
            </button>
          )}
        </div>
      </div>

      {(status || error) && (
        <div className={panelClassName}>
          {status && <p className="text-sm text-cyan-200">{status}</p>}
          {error && <p className="mt-2 text-sm text-rose-300">{error}</p>}
        </div>
      )}

      {loadedJson && (
        <div className={panelClassName}>
          <p className="text-sm text-slate-400">Loaded JSON</p>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all rounded-2xl bg-slate-950 px-4 py-4 font-mono text-sm text-slate-100">
            {loadedJson}
          </pre>
        </div>
      )}
    </div>
  );
}
