import { MenuItemCard } from "@/components/menu/menu-item-card"
import { listProducts, type Product } from "@/lib/mock-db"
import { FloatingCartWidget } from "@/components/menu/floating-cart-widget"
export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const external = await listProducts()
  const products = [...external]

  const foods = products.filter((p) => p.category === "food")
  const drinks = products.filter((p) => p.category === "drink")

  return (
    <>
      <main className="mx-auto max-w-6xl p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Food</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((p) => (
              <MenuItemCard key={p.id} product={p} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drinks.map((p) => (
              <MenuItemCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <FloatingCartWidget />
    </>
  )
}
