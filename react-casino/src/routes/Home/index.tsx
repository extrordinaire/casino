import { useEffect } from "react"

const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className="flex h-screen w-screen flex-col px-20 py-10 font-sans text-lg">
      <div className="flex w-full items-center">
        <div className="flex items-center space-x-2">
          <div className="h-14 w-14 rounded-full bg-slate-200"></div>
          <span> Usuario </span>
        </div>
        <div className="basis-full"></div>
        <div className="flex h-fit flex-nowrap items-center space-x-2 rounded-sm bg-slate-50 px-2 py-1 text-slate-900">
          <span className="whitespace-nowrap font-bold">Wallet</span>
          <span className="material-icons select-none">
            account_balance_wallet
          </span>
          <span className="material-icons select-none">expand_more</span>
        </div>
        <div className="flex h-fit items-center space-x-2 rounded-sm bg-amber-500 px-2 py-1 text-slate-50">
          <span className="font-bold">990.00</span>
          <span className="material-icons select-none">currency_bitcoin</span>
        </div>
        <div className="flex h-fit flex-nowrap items-center space-x-2 rounded-sm bg-slate-50 px-2 py-1 text-slate-900">
          <span className="whitespace-nowrap font-bold">ADD FUNDS</span>
          <span className="material-icons select-none">currency_exchange</span>
        </div>
      </div>
      <div className="flex basis-full items-center justify-center">
        <span className="flex aspect-square h-96 flex-col rounded-lg bg-slate-100 p-6 shadow-md">
          <div className="text-xl font-bold">Roulette</div>
        </span>
        <span className="flex aspect-square h-96 flex-col rounded-lg bg-slate-100 p-6 shadow-md">
          <div className="text-xl font-bold">Poker</div>
        </span>
        <span className="flex aspect-square h-96 flex-col rounded-lg bg-slate-100 p-6 shadow-md">
          <div className="text-xl font-bold">Roulette</div>
        </span>
      </div>
    </div>
  )
}

export default Home

// [9,20][8,19] | [7,18]
// [9,20][8,19] | [7,18]
// [8,20][9,19] | [7,18]
// [8,19][9,20] | [7,18]
// [8,9][19,20] | [7,18] 💲💲💲

// [9,20][8,19] | [7,18]
// [9,20,8,19] | [7,18]
// [8,20,9,19] | [7,18]

// [9,20,8,19] | [7,18]
// [9,20,8,19] | [7,18]

// [9,20,_8_,19] | [7,18]

// [8,20,9,19] | [7,18]
