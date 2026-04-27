export default function WhatIsQrCode() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-earth-300">
      <h1 className="text-3xl font-bold text-earth-50">
        What Is a QR Code and When Should You Use It?
      </h1>

      <article className="mt-6 space-y-6 text-sm leading-7 text-earth-400">
        <p>
          A QR code is a two-dimensional barcode that can store information such as a URL, text,
          contact details, or event information. Users can scan it with a phone camera to open the content quickly.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Common QR code use cases</h2>
        <p>
          QR codes are useful for sharing website links, menus, Wi-Fi details, event registration pages,
          payment links, contact cards, and internal workflow links.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Best practices</h2>
        <p>
          Keep the destination clear, test the QR code before publishing, and avoid linking to unsafe or confusing
          pages. If a QR code will be printed, make sure it has enough contrast and size for easy scanning.
        </p>

        <h2 className="text-xl font-semibold text-earth-100">Privacy and safety</h2>
        <p>
          Users should be careful when scanning QR codes from unknown sources. A QR code may open a website,
          so it is important to check the destination before entering personal information.
        </p>

        <p>
          You can create a QR code from the <a href="/" className="text-forest-300 hover:underline">tool directory</a>.
        </p>
      </article>
    </main>
  )
}