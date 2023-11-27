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
        <AvatarImage src={user.avatar} alt={`${user.name}`} />
        <AvatarFallback>
          {user.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </CustomPopover>
  )
}