import { Helmet } from 'react-helmet-async'

export default function StrongPasswords() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>How to Create Strong Passwords Safely - wannarat.cc</title>
        <meta
          name="description"
          content="Learn how password length, randomness, uniqueness, password managers, and safe sharing habits help protect online accounts."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/how-to-create-strong-passwords" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">Security guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            How to Create Strong Passwords Safely
          </h1>
          <p className="mt-4 text-earth-300">
            A strong password is still one of the simplest defenses for an online account. It will
            not solve every security problem, but it makes guessing, credential stuffing, and casual
            account takeover much harder.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">What makes a password strong?</h2>
          <p className="mt-3">
            Strong passwords have three important qualities: length, unpredictability, and uniqueness.
            Length matters because every extra character increases the number of possible combinations.
            Unpredictability matters because attackers do not guess randomly at first. They try leaked
            passwords, names, birthdays, keyboard patterns, dictionary words, and common substitutions
            such as replacing an “a” with “@”.
          </p>
          <p className="mt-3">
            Uniqueness is just as important as complexity. A long password that is reused on five
            websites becomes weak when one of those websites is breached. Attackers often test leaked
            email and password pairs against other services. This is why a unique password for every
            account is safer than one clever password reused everywhere.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A practical password workflow</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Use a password manager as the main place to store account passwords.</li>
            <li>Generate a new password for each important account instead of inventing one manually.</li>
            <li>Choose at least 16 characters when the website supports it.</li>
            <li>Enable two-factor authentication for email, banking, cloud, and developer accounts.</li>
            <li>Review old accounts and replace reused passwords over time.</li>
          </ol>
          <p className="mt-3">
            This workflow is easier than memorizing dozens of complex strings. You only need to
            remember the password manager’s master password and keep recovery methods safe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Common mistakes to avoid</h2>
          <p className="mt-3">
            The most common mistake is making a password that looks complicated but follows a predictable
            pattern. Examples include adding the current year, using a service name inside the password,
            or changing only one number at the end. These habits feel convenient, but they are easy to
            guess once an attacker has one leaked password.
          </p>
          <p className="mt-3">
            Another mistake is sharing passwords through chat, screenshots, or email. Even temporary
            passwords should be handled carefully. If you must share access with a teammate, use a
            password manager’s sharing feature or create a separate account with the correct permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">How a password generator helps</h2>
          <p className="mt-3">
            A password generator removes human patterns from the process. Instead of trying to invent a
            memorable phrase, you can generate a random value with enough length and character variety.
            The generated password should then be saved in a password manager rather than copied into
            notes, spreadsheets, or shared documents.
          </p>
          <p className="mt-3">
            You can use the local tool page to understand the workflow, then open the{' '}
            <a href="/tools/passgen" className="text-forest-300 hover:underline">
              Password Generator
            </a>{' '}
            when you are ready to create a value.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A simple account security checklist</h2>
          <p className="mt-3">
            Start with email, cloud storage, banking, developer platforms, hosting providers, and social
            accounts. These accounts are high impact because they can reset other passwords, contain private
            files, or publish content publicly. Replace weak or reused passwords first, then continue with
            lower-risk accounts over time.
          </p>
          <p className="mt-3">
            For each account, confirm that the password is unique, two-factor authentication is enabled,
            recovery email and phone settings are current, and old trusted devices are removed if you no
            longer use them. If an account offers backup codes, store them somewhere safer than the account
            itself.
          </p>
          <p className="mt-3">
            Teams should also avoid shared personal accounts. Create separate user accounts with proper
            roles, then remove access when someone leaves a project. This is easier to audit and safer than
            passing one password around.
          </p>
          <p className="mt-3">
            For developers, pay special attention to source control, package registries, cloud dashboards,
            domain registrars, and deployment platforms. One weak password in those systems can affect many
            users, not only the account owner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">FAQ</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-semibold text-earth-100">Is a passphrase better than random characters?</h3>
              <p className="mt-1">
                A long passphrase can be strong if it is truly unique and not based on a famous quote or
                personal information. Random generated passwords are usually better for accounts stored in
                a password manager.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-earth-100">How often should I change passwords?</h3>
              <p className="mt-1">
                Change a password when it may be compromised, reused, shared too broadly, or created with
                a weak pattern. Forced frequent changes can lead to predictable variations, so quality is
                more important than calendar-based rotation.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
