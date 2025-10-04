"use client"

import { listOrders } from "@/lib/mock-db"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import Link from "next/link"
import * as React from "react"

export default function SuccessPage() {
  const { clear } = useCart()
  React.useEffect(() => {
    clear()
  }, [clear])
  
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Order Confirmed</h1>
      <p className="text-muted-foreground">
        Thank you! Your order is confirmed.
      </p>
      
      <div className="pt-2">
        <Button asChild>
          <Link href="/menu">Back to menu</Link>
        </Button>
      </div>
    </main>
  )
}
