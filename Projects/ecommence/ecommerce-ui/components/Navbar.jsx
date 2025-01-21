"use client";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge"; // Importing Badge
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { redirect, useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";

const appName = "Nepal Mart";
const drawerWidth = 240;
const navItems = [
    {
        id: 1,
        name: "Cart",
        path: "/cart/",
        icon: (
            <Badge badgeContent={4} color="error">
                <AddShoppingCartIcon />
            </Badge>
        ),
    },
];

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        localStorage.clear();
        redirect("/login");
    };

    const router = useRouter();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {appName}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={() => router.push(item.path)}
                        >
                            <ListItemText primary={item.name} />
                            {item.icon}
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding className="text-red-700">
                    <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={handleLogout}
                    >
                        <ListItemText primary="Logout" />
                        <LogoutIcon />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", mb: "5rem" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar className="bg-purple-800">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                        className="hover:cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        {appName}
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                sx={{ color: "#fff" }}
                                className="hover:cursor-pointer"
                                onClick={() => router.push(item.path)}
                            >
                                {item.icon}
                            </Button>
                        ))}
                        <Button
                            disableRipple
                            sx={{ color: "#c73636", fontWeight: "bold" }}
                            onClick={handleLogout}
                        >
                            <LogoutIcon />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Navbar;
