'use client'
import { SignOutButton, useUser } from "@clerk/nextjs"

function Dashboard() {
    const {user} = useUser();
    return (
        <div>
            Hello, {user?.lastName} <SignOutButton>Sign Out</SignOutButton>
        </div>
    )
}

export default Dashboard