import { useState } from 'react'
import { AlertBox } from './components/AlertBox/AlertBox'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay'

// Sample data for testing components
const user = {
  id: '1',
  name: 'Rachel Reactfied',
  email: 'rreactfied@example.com',
  role: 'Weapons Specialist Danper LLC',
  avatarUrl: undefined
}

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quallity wireless headphones with noise cancellation.',
  imageUrl: undefined,
  inStock: true
}

function App() {
  const [showAlert, setShowAlert] = useState(true)
  const [cartItems, setCartItems] = useState<string[]>([])

  console.log('App rendered — cartItems:', cartItems)

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Component Library</h1>

      {/* AlertBox — success message with dismiss */}
      {showAlert && (
        <div className="mb-6">
          <AlertBox
            type="success"
            message="Your profile has been updated successfully!"
            onClose={() => {
              console.log('AlertBox closed')
              setShowAlert(false)
            }}
          >
            <p className="text-sm mt-2">
              You can now continue using the application.
            </p>
          </AlertBox>
        </div>
      )}

      {/* UserProfileCard — with edit handler and children */}
      <div className="mb-6">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => {
            console.log('Editing user:', userId)
            alert(`Editing user ${userId}`)
          }}
        >
          <p className="text-sm text-gray-500">Last login: 2 hours ago</p>
        </UserProfileCard>
      </div>

      {/* ProductivityDisplay - with add to cart handler and children*/}
      <div className='mb-6'>
        <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => {
          console.log('Added to Cart:', productId)
          setCartItems(prev => [...prev, productId])
          alert(`Added product ${productId} to cart`)
        }}
        >
          <p className="text-sm text-gray-500">Free shipping available</p>
        </ProductDisplay>
      </div>

      {/* Cart summary */}
      {cartItems.length > 0 && (
        <AlertBox type="info" message={`${cartItems.length} item(s) in cart`}>
          <p className="text-sm mt-1">Proceed to checkout when ready.</p>
        </AlertBox>
      )}
      </div>
  )
}

export default App
