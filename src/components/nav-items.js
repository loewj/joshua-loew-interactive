import React from "react"
import { MenuItemsWrapper } from "../styles/nav-items-styles"
import { Link } from "gatsby"

import { motion, AnimatePresence } from "framer-motion"

const NavItems = () => {

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
  }

  return (
    <AnimatePresence>
      <MenuItemsWrapper variants={container} initial="hidden" animate="show">
        <motion.div whileHover={{ scale: 1.1 }} variants={item}>
          <Link
            className={"first"}
            activeClassName="active"
            to="/"
          >
            Home
          </Link>
        </motion.div>
        <motion.span className={"slash"} variants={item}>
          /
        </motion.span>
        <motion.div variants={item}>
          <Link
            activeClassName="active"
            to="/about/"
          >
            About
          </Link>
        </motion.div>
        <motion.span className={"slash"} variants={item}>
          /
        </motion.span>
        <motion.div variants={item}>
          <Link
            activeClassName="active"
            to="/software/"
          >
            Software
          </Link>
        </motion.div>
        <motion.span className={"slash"} variants={item}>
          /
        </motion.span>
        <motion.div variants={item}>
          <Link
            activeClassName="active"
            to="/photography/"
          >
            Photography
          </Link>
        </motion.div>
        <motion.span className={"slash"} variants={item}>
          /
        </motion.span>
        <motion.div variants={item}>
          <Link
            activeClassName="active"
            to="/blog/"
          >
            Blog
          </Link>
        </motion.div>
      </MenuItemsWrapper>
    </AnimatePresence>
  )
}

export default NavItems
