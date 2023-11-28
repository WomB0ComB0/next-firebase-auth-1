"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { UserContext } from "@/contexts/UserContext"
import { useContext } from "react"
import { CustomPopover } from "@/components/custom/Popover"

export function UserAvatar() {
  const { user } = useContext(UserContext)
  return (
    <CustomPopover side="bottom" >
      <Avatar>
        <AvatarImage src={user.avatar || `https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&rs=1&c=1&qlt=95&w=132&h=115`} alt={`${user.name}`} />
        <AvatarFallback>
          {user.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </CustomPopover>
  )
}