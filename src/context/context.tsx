import { useState, createContext, useContext } from 'react'

interface LanContextType {
  lan: string
  setLan: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: LanContextType = {
  lan: 'ESP',
  setLan: () => {} // función vacía por defecto
}

export const Context = createContext<LanContextType>(defaultValue)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState<string>('ESP')

  return <Context.Provider value={{ lan, setLan }}>{children}</Context.Provider>
}

// (opcional) Hook para usar el contexto
export const useLan = () => useContext(Context)
