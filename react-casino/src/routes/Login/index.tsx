import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface MustUpdateType {
  username: boolean
  password: boolean
}

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [mustUpdate, setMustUpdate] = useState<MustUpdateType>({
    username: false,
    password: false
  })
  const [summitState, setSummitState] = useState("")

  const navigate = useNavigate()

  function event_setPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
    setMustUpdate((prev) => ({ ...prev, password: false }))
  }

  function event_setUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
    setMustUpdate((prev) => ({ ...prev, username: false }))
  }

  function event_handleForm(e: React.FormEvent) {
    e.preventDefault()
    if (username === "pepe" && password === "grillo") {
      setSummitState("success")
      localStorage.setItem("sessionToken", "pepepepe")

      const gotoOtherPage = async () => {
        await navigate("/")
      }

      gotoOtherPage()
    } else {
      setSummitState("failure")
      setMustUpdate({
        username: true,
        password: true
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    localStorage.removeItem("sessionToken")

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <form className="flex h-full w-full items-center justify-center">
        <div className="flex h-fit w-full max-w-md flex-col justify-evenly space-y-4 rounded-xl bg-slate-50 p-8 text-slate-900 shadow-md">
          <div className="h-24 w-24 self-center rounded-full bg-slate-200"></div>
          <span
            className={`flex h-12 w-full items-center rounded-xl bg-slate-100 px-4 ring-2 ${
              mustUpdate.username
                ? "ring-rose-500"
                : "focus-within:ring-cyan-700"
            }`}
          >
            <i className="material-icons mr-4 select-none">account_circle</i>
            <input
              type="text"
              className="basis-full bg-transparent placeholder:text-slate-400 focus:outline-none"
              placeholder="Username"
              onChange={event_setUsername}
            />
          </span>
          <span
            className={`flex h-12 w-full items-center rounded-xl bg-slate-100 px-4 ring-2 ${
              mustUpdate.password
                ? "ring-rose-500"
                : "focus-within:ring-cyan-700"
            }`}
          >
            <i className="material-icons mr-4 select-none">lock</i>
            <input
              type="password"
              className="basis-full bg-transparent placeholder:text-slate-400 focus:outline-none "
              placeholder="Password"
              onChange={event_setPassword}
              pattern="[A-Za-z]{3}"
            />
          </span>
          <button
            className="rounded-xl bg-cyan-600 py-2 px-4 text-white"
            onClick={event_handleForm}
          >
            Log in
          </button>
          <div className="flex items-center border-slate-200 font-bold text-slate-200">
            <span className="basis-full border-t-2 border-inherit" />
            <span className="mx-2">or</span>
            <span className="basis-full border-t-2 border-inherit" />
          </div>
          <button
            className="rounded-xl bg-cyan-600 py-2 px-4 text-white"
            onClick={(e) => {
              e.preventDefault()
              console.log("pressed register")
            }}
          >
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
