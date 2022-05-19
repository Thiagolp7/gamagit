import { useEffect, useState } from "react";
import { useGithubUser } from "../../hooks/useGithubUser";
import { githubApi } from "../../services/githubApi"


export function Home(){
  const { userData, getUserApiData } = useGithubUser();
  const user = 'thiagolp7'

  useEffect(() => {
    getUserApiData(user)
  }
  , [])

  return (
    <>
      <h1>Github user: {userData.name}</h1>
    </>
  )
}