export default function StrongPasswords() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">
        How to Create Strong Passwords Safely
      </h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          A strong password is one of the simplest ways to protect an online account. Weak passwords,
          reused passwords, and predictable patterns can make accounts easier to compromise.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">What makes a password strong?</h2>
        <p>
          A strong password should be long, unpredictable, and unique. Length matters because longer passwords
          are harder to guess. Randomness matters because names, birthdays, keyboard patterns, and common words
          are easier to predict.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Avoid password reuse</h2>
        <p>
          Reusing the same password across multiple websites is risky. If one website is compromised, attackers
          may try the same email and password combination on other services.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Use a password manager</h2>
        <p>
          A password manager can help store unique passwords for each account. This makes it easier to use strong,
          random passwords without needing to memorize every one.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">How the password generator helps</h2>
        <p>
          A password generator can create random passwords with adjustable length and character options. For best
          results, use long passwords and avoid manually editing them into predictable patterns.
        </p>

        <p>
          You can try the password tool from the <a href="/" className="text-forest-300 hover:underline">tool directory</a>.
        </p>
      </article>
    </main>
  )
}