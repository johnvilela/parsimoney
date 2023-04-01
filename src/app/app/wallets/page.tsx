import { NavigationButton } from "@/components/Inputs/NavigationButton";

function Wallets() {
  return (
    <div>
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-stone-200">
          <h1 className="text-2xl font-bold">Wallets</h1>
          <div className="w-full sm:w-44">
            <NavigationButton href='/app/wallets/form' variant="primary">
              Create a new wallet
            </NavigationButton>
          </div>
        </div>

        <p className="p-4 w-full text-center">
          No wallet found
        </p>

      </div>
    </div>
  )
}

export default Wallets;