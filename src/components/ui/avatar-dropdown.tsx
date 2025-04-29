"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export function AvatarDropdown() {
  const supabase = createClient();
  const [profileImg, setProfileImg] = useState(
    "https://pbs.twimg.com/media/GbwV4DGWUBsEmuT.jpg",
  );
  const { data: session } = useSession();

  // useEffect(() => {
  //   async function fetchProfilePicture() {
  //     const { data, error } = await supabase
  //       .schema("next_auth")
  //       .from("users")
  //       .select("image")
  //       .eq("id", session?.user?.id);
  //     console.log(typeof data);
  //     if (!error) {
  //       setProfileImg(data);
  //     }
  //   }

  //   fetchProfilePicture();
  // }, [supabase, session?.user?.id]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer transition-opacity hover:opacity-80">
          <AvatarImage
            src={session?.user?.image ?? profileImg}
            alt={`${session?.user?.name}'s avatar`}
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {session?.user?.name}&apos;s Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut();
            // TODO: Redirects don't work in client components, find another way
          }}
          className="cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
