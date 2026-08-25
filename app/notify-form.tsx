"use client";

import { FormEvent, useState } from "react";
import { LINKS, SIGNUP_ENDPOINT } from "./site";

type State = "idle" | "sending" | "sent" | "error";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  // No handler wired up: don't render an input that quietly discards addresses.
  if (!SIGNUP_ENDPOINT) {
    return (
      <>
        <p className="notify__body">
          The list opens closer to publication. Until then, the announcement goes out on
          LinkedIn and Medium — follow either and you won&rsquo;t miss it.
        </p>
        <div className="notify__links">
          <a
            className="btn btn--gold btn--sm"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener"
          >
            Follow on LinkedIn
          </a>
          <a
            className="btn btn--ghost btn--sm"
            href={LINKS.publication}
            target="_blank"
            rel="noopener"
          >
            Read on Medium
          </a>
        </div>
      </>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(response.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <p className="notify__body">
        One email when the book goes live, one when the audiobook lands. Nothing else.
      </p>
      <form className="notify__form" onSubmit={onSubmit}>
        <label className="skip-link" htmlFor="notify-email">
          Email address
        </label>
        <input
          id="notify-email"
          className="notify__input"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={state === "sending" || state === "sent"}
        />
        <button
          className="notify__submit"
          type="submit"
          disabled={state === "sending" || state === "sent"}
        >
          {state === "sent" ? "You’re on the list" : "Notify me"}
        </button>
      </form>
      <p className="notify__foot">
        {state === "sent"
          ? "Thanks. Nothing else until there is news."
          : state === "error"
            ? "That didn’t go through. Try again, or reach out on LinkedIn."
            : "No spam, no sharing. Unsubscribe in one click."}
      </p>
    </>
  );
}
