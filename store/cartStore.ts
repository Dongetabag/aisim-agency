import { create } from 'zustand'

export interface Deliverable {
  id: string
  name: string
  description: string
  price: number
  category: string
  estimatedDelivery: string
  features: string[]
  icon?: string
  badge?: string
}

export interface CartItem extends Deliverable {
  quantity: number
  customizations?: Record<string, any>
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Deliverable, customizations?: Record<string, any>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addItem: (item, customizations) => {
    const items = get().items
    const existingItem = items.find((i: CartItem) => i.id === item.id)
    
    let newItems: CartItem[]
    if (existingItem) {
      newItems = items.map((i: CartItem) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1, customizations }
          : i
      )
    } else {
      newItems = [...items, { ...item, quantity: 1, customizations }]
    }
    set({ items: newItems })
    if (typeof window !== 'undefined') {
      localStorage.setItem('aisim-cart', JSON.stringify(newItems))
    }
  },
  removeItem: (id) => {
    const newItems = get().items.filter((item: CartItem) => item.id !== id)
    set({ items: newItems })
    if (typeof window !== 'undefined') {
      localStorage.setItem('aisim-cart', JSON.stringify(newItems))
    }
  },
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id)
    } else {
      const newItems = get().items.map((item: CartItem) =>
        item.id === id ? { ...item, quantity } : item
      )
      set({ items: newItems })
      if (typeof window !== 'undefined') {
        localStorage.setItem('aisim-cart', JSON.stringify(newItems))
      }
    }
  },
  clearCart: () => {
    set({ items: [] })
    if (typeof window !== 'undefined') {
      localStorage.removeItem('aisim-cart')
    }
  },
  getTotal: () => {
    return get().items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
  },
  getItemCount: () => {
    return get().items.reduce((count: number, item: CartItem) => count + item.quantity, 0)
  },
}))

// Initialize from localStorage on client side
if (typeof window !== 'undefined') {
  const initializeCart = () => {
    try {
      const stored = localStorage.getItem('aisim-cart')
      if (stored) {
        const items = JSON.parse(stored)
        useCartStore.setState({ items })
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e)
      localStorage.removeItem('aisim-cart')
    }
  }
  
  // Initialize on mount
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCart)
  } else {
    initializeCart()
  }
}

