export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold">NutMe</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#products" className="text-neutral-600 hover:text-neutral-900">Products</a>
            <a href="#how" className="text-neutral-600 hover:text-neutral-900">How it’s made</a>
            <a href="#faq" className="text-neutral-600 hover:text-neutral-900">FAQ</a>
            <a href="#order" className="text-neutral-600 hover:text-neutral-900">Order</a>
          </nav>
          <a
            href="mailto:nutmetreats@gmail.com?subject=NutMe%20Order%20Inquiry"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white"
          >
            Pre-order / Inquire
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <span className="inline-block rounded-2xl bg-neutral-100 px-3 py-1 text-xs font-medium">
          Small-batch • Maple-sweetened
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Candied nuts that taste like a treat —
          <span className="text-neutral-500"> made like a craft.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          NutMe makes premium candied pecans and almonds glazed with real maple syrup and cocoa.
          Crunchy, glossy, and perfectly snackable.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#order"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Pre-order / Inquire
          </a>
          <a
            href="#products"
            className="rounded-2xl bg-neutral-100 px-5 py-3 text-sm font-medium hover:bg-neutral-200"
          >
            See products
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Products</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Simple ingredients, glossy crunch, and flavors designed to feel both nostalgic and elevated.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Cocoa Maple Candied Pecans & Almonds",
              tag: "Best Seller",
              desc: "Small-batch roasted nuts glazed with maple, kissed with cocoa, and cooled for the perfect crunch.",
              price: "4 oz ($7–$8) • 8 oz ($12–$14)",
            },
            {
              name: "Cinnamon Maple",
              tag: "Coming Soon",
              desc: "Warm cinnamon + maple for a classic, giftable flavor.",
              price: "4 oz (TBD)",
            },
            {
              name: "Spicy Cacao",
              tag: "Limited",
              desc: "Cocoa with a gentle chili warmth—sweet, bold, and unexpected.",
              price: "4 oz (TBD)",
            },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex justify-between gap-3">
                <h3 className="text-base font-semibold">{p.name}</h3>
                <span className="rounded-2xl bg-neutral-100 px-3 py-1 text-xs">{p.tag}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
              <div className="mt-3 text-sm font-medium">{p.price}</div>
              <a
                href="#order"
                className="mt-5 block w-full rounded-2xl bg-neutral-900 px-4 py-2 text-center text-sm text-white hover:bg-neutral-800"
              >
                Order / Ask
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">How it’s made</h2>
            <p className="mt-3 text-neutral-600">
              We keep it simple: real nuts, real maple, cocoa, and careful heat—
              so every batch is glossy, crunchy, and not overly sweet.
            </p>

            <div className="mt-6 space-y-3">
              {[
                ["🌿 Simple ingredients", "Pecans, almonds, maple syrup, cocoa."],
                ["✨ Glossy glaze", "Cooked low and slow until shiny and coated."],
                ["📄 Cooled to crunch", "Spread on parchment and cooled to harden."],
                ["✅ Clear labeling", "Allergens listed clearly on every bag."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border bg-white p-4">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-sm text-neutral-600">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Ingredient transparency</h3>
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-600 space-y-1">
              <li>Pecan halves</li>
              <li>Almonds</li>
              <li>Maple syrup</li>
              <li>Cocoa powder</li>
              <li>Cocoa wafers (optional)</li>
            </ul>

            <div className="mt-4 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600">
              <strong>Allergens:</strong> Contains tree nuts. May contain wheat depending on wafer brand.
            </div>
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Order / Inquire</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          For now, orders are handled by email while we finalize checkout.
        </p>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm">
            Email: nutmetreats@gmail.com (orders & inquiries)
          </p>
          <div className="mt-4 rounded-2xl bg-neutral-50 p-4 text-xs text-neutral-600">
            “This food is made in a home kitchen and is not inspected by the Texas Department of State Health Services.”
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Do you ship?", "Texas shipping where cottage food rules allow."],
              ["How long do they last?", "Best within 2–3 weeks, stored cool and dry."],
              ["Are there allergens?", "Yes — tree nuts, and possibly wheat."],
              ["Do you do gifts?", "Yes, bulk and event orders available."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="font-semibold">{q}</div>
                <div className="mt-2 text-sm text-neutral-600">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">NutMe</div>
            <div className="text-xs text-neutral-500">nutme.com</div>
          </div>
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} NutMe. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
