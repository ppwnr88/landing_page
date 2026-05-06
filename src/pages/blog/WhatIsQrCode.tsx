import { Helmet } from 'react-helmet-async'

export default function WhatIsQrCode() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <Helmet>
        <title>What Is a QR Code and When Should You Use It? - wannarat.cc</title>
        <meta
          name="description"
          content="A practical guide to QR codes, common use cases, safe scanning habits, printing tips, and when a QR code is the right tool."
        />
        <link rel="canonical" href="https://wannarat.cc/blog/what-is-qr-code" />
      </Helmet>

      <article className="space-y-7 text-base leading-8 text-earth-400">
        <header>
          <p className="text-xs uppercase tracking-widest text-forest-300">Web utility guide</p>
          <h1 className="mt-3 text-3xl font-bold text-earth-50 md:text-4xl">
            What Is a QR Code and When Should You Use It?
          </h1>
          <p className="mt-4 text-earth-300">
            A QR code is a two-dimensional barcode that can store a URL, text, contact information,
            event details, Wi-Fi settings, or other small data. The most common use is simple: help
            someone move from a physical object or shared screen to a digital destination.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">How QR codes work</h2>
          <p className="mt-3">
            When a phone scans a QR code, the camera reads the pattern and decodes the information
            inside it. If the content is a web link, the phone usually asks whether to open that link
            in a browser. Because QR codes can hide the full destination until scan time, they should
            be used with clear context and trustworthy placement.
          </p>
          <p className="mt-3">
            QR codes become more complex as they store more data. A short URL usually creates a simpler
            code that is easier to scan, especially when printed small. This is why many teams combine
            QR codes with short, stable URLs for posters, packaging, internal documentation, or events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Good use cases</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Opening a registration page from an event poster.</li>
            <li>Sharing a menu, product page, or support form in a physical location.</li>
            <li>Helping attendees join a survey or check-in flow quickly.</li>
            <li>Linking printed documentation to a page that can be updated later.</li>
            <li>Sharing internal workflow shortcuts in an office or training room.</li>
          </ul>
          <p className="mt-3">
            QR codes are best when scanning is easier than typing. If the user is already on a website
            or inside an app, a normal link or button is usually clearer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Printing and design tips</h2>
          <p className="mt-3">
            Use strong contrast, enough white space around the code, and a size appropriate for the
            viewing distance. A QR code on a business card can be small because people scan it up close.
            A code on a wall poster must be larger because people may scan it from several steps away.
          </p>
          <p className="mt-3">
            Always test the code after exporting the final design. Test it on more than one phone, in
            the lighting conditions where it will be used, and at the final printed size. A code that
            scans perfectly on a monitor may fail after being compressed, recolored, or printed on a
            reflective surface.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">Privacy and safety</h2>
          <p className="mt-3">
            Do not encode passwords, private tokens, or sensitive personal information in a QR code.
            Anyone who can scan or photograph it may be able to read the content. If the code points
            to a login page, make sure the destination is easy to recognize and uses HTTPS.
          </p>
          <p className="mt-3">
            When scanning codes from public places, look at the destination before opening it. Attackers
            can place stickers over legitimate codes or use short links to hide suspicious destinations.
          </p>
          <p className="mt-3">
            You can start from the{' '}
            <a href="/tools/qr" className="text-forest-300 hover:underline">
              QR Generator tool page
            </a>{' '}
            to review safety notes before creating a code.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">A practical QR publishing checklist</h2>
          <p className="mt-3">
            Before publishing a QR code, confirm the destination is final, uses HTTPS, loads well on mobile,
            and explains what the user should do next. A code that sends people to a desktop-only page,
            expired form, or confusing landing page creates a poor experience even if the code scans
            correctly.
          </p>
          <p className="mt-3">
            Add a short text label near the code, such as “Scan to register” or “Scan to open the setup
            guide.” This helps users decide whether the scan is worth their attention. If the destination
            is important, include a readable fallback URL so people can type it manually when the scan fails.
          </p>
          <p className="mt-3">
            For printed materials, keep the original design file and the destination URL in a shared place.
            This makes it easier to reprint, update, or retire old codes when campaigns, events, or support
            pages change.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-earth-100">FAQ</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-semibold text-earth-100">Can a QR code be edited after printing?</h3>
              <p className="mt-1">
                The printed pattern cannot change. If it contains a short URL or managed redirect, you
                may be able to update the destination behind that URL.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-earth-100">Should every page have a QR code?</h3>
              <p className="mt-1">
                No. Use QR codes when they reduce friction. If a normal link, button, or search term is
                easier, that is usually the better user experience.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
