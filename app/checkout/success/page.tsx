import { listOrders } from "@/lib/mock-db"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import Link from "next/link"
import * as React from "react"

export default function SuccessPage({ searchParams }: {
  searchParams: {
    order_id?: string
    status_code?: string
    transaction_status?: string
  }
}) {
  React.useEffect(() => {
    clear()
  }, [clear])
  
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Order Confirmed</h1>
      <p className="text-muted-foreground">
        Thank you! Your order <span className="font-mono">{order.id}</span> is confirmed.
      </p>
      </div>
      <div className="pt-2">
        <Button asChild>
          <Link href="/menu">Back to menu</Link>
        </Button>
      </div>
    </main>
  )
}
