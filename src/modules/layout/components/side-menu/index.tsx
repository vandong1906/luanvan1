"use client"

// import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

// const SideMenuItems = {
//   Home: "/",
//   Store: "/store",
//   Account: "/account",
//   Cart: "/cart",
// }

// const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
//   const toggleState = useToggleState()

//   return (
//     <div className="h-full">
//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               <div className="relative flex h-full">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
//                 >
//                   Menu
//                 </Popover.Button>
//               </div>

//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition ease-out duration-150"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100 backdrop-blur-2xl"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 backdrop-blur-2xl"
//                 leaveTo="opacity-0"
//               >
//                 <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
//                   <div
//                     data-testid="nav-menu-popup"
//                     className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
//                   >
//                     <div className="flex justify-end" id="xmark">
//                       <button data-testid="close-menu-button" onClick={close}>
//                         <XMark />
//                       </button>
//                     </div>
//                     <ul className="flex flex-col gap-6 items-start justify-start">
//                       {Object.entries(SideMenuItems).map(([name, href]) => {
//                         return (
//                           <li key={name}>
//                             <LocalizedClientLink
//                               href={href}
//                               className="text-3xl leading-10 hover:text-ui-fg-disabled"
//                               onClick={close}
//                               data-testid={`${name.toLowerCase()}-link`}
//                             >
//                               {name}
//                             </LocalizedClientLink>
//                           </li>
//                         )
//                       })}
//                     </ul>
//                     <div className="flex flex-col gap-y-6">
//                       <div
//                         className="flex justify-between"
//                         onMouseEnter={toggleState.open}
//                         onMouseLeave={toggleState.close}
//                       >
//                         {regions && (
//                           <CountrySelect
//                             toggleState={toggleState}
//                             regions={regions}
//                           />
//                         )}
//                         <ArrowRightMini
//                           className={clx(
//                             "transition-transform duration-150",
//                             toggleState.state ? "-rotate-90" : ""
//                           )}
//                         />
//                       </div>
//                       <Text className="flex justify-between txt-compact-small">
//                         © {new Date().getFullYear()} Medusa Store. All rights
//                         reserved.
//                       </Text>
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu

{
  /* <List className="flex flex-col gap-6 items-start justify-start">
//                       {Object.entries(SideMenuItems).map(([name, href]) => {
//                         return (
//                           <Listitem key={name}>
//                             <LocalizedClientLink
//                               href={href}
//                               className="text-3xl leading-10 hover:text-ui-fg-disabled"
//                               onClick={close}
//                               data-testid={`${name.toLowerCase()}-link`}
//                             >
//                               {name}
//                             </LocalizedClientLink>
//                           </Listitem>
//                         )
//                       })}
//                     </List> */
}

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import Collapse from "@mui/material/Collapse"
import MenuIcon from "@mui/icons-material/Menu"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
export default function SideMenu({
  regions,
}: {
  regions: HttpTypes.StoreRegion[] | null
}) {
  const [open, setOpen] = React.useState(false)
const toggleState = useToggleState();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const handleClick = () => {
    setOpen(!open)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List className="flex flex-col gap-6 items-start justify-start">
            {Object.entries(SideMenuItems).map(([name, href]) => {
              return (
                <ListItem key={name}>
                  <LocalizedClientLink
                    href={href}
                    className="text-3xl leading-10 hover:text-ui-fg-disabled"
                    onClick={close}
                    data-testid={`${name.toLowerCase()}-link`}
                  >
                    {name}
                  </LocalizedClientLink>
                </ListItem>
              )
            })}
          </List>
        </Collapse>

        <div
          className="flex justify-between"
          onMouseEnter={toggleState.open}
          onMouseLeave={toggleState.close}
        >
          {regions && (
            <CountrySelect toggleState={toggleState} regions={regions} />
          )}
          <ArrowRightMini
            className={clx(
              "transition-transform duration-150",
              toggleState.state ? "-rotate-90" : ""
            )}
          />
        </div>
      </List>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
