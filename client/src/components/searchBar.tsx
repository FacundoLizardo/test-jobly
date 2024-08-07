'use client'
import { Input } from "@/components/ui/input"
import {useFormState} from "react-dom";
import {getNewsAction} from "@/app/utils/actions";
import {useEffect} from "react";
export default function SearchBar() {

  const [newsState, searchNewsFormAction] = useFormState(getNewsAction, {success: false})
  useEffect(() => {
    console.log({newsState})
  }, [newsState]);

  return (
    <div className="flex items-center p-2  bg-white dark:bg-gray-800 rounded-lg shadow lg:min-w-[500px]">
      <form action={searchNewsFormAction}
      id={'searchBar'}>
        <Input
        type="text"
        placeholder="Palabras clave..."
        name={'searchInput'}
        className="flex-1 text-gray-900 dark:text-white bg-transparent border-none focus:ring-0 mx-2"
      />
        <SearchIcon className="text-gray-500 dark:text-gray-400 mx-2"/>
      </form>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}