import { Button, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";

const CustomButton = () => {
    return (
        <div>
            <section
                id="variant-section"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <h1>Button Variants</h1>
                <Button>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </section>

            <section
                id="color-section"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <h1>Button Color</h1>
                <Button variant="contained" color="success">
                    Success
                </Button>

                <Button variant="contained" color="primary">
                    Primary
                </Button>

                <Button variant="contained" color="secondary">
                    Secondary
                </Button>

                <Button variant="contained" color="warning">
                    Warning
                </Button>

                <Button variant="contained" color="error">
                    Error
                </Button>

                <Button variant="contained" sx={{ bgcolor: "#2A3663" }}>
                    Custom
                </Button>
            </section>

            <section
                id="size-section"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <h1>Button Size</h1>
                <Button variant="contained" size="small">
                    Small
                </Button>

                <Button variant="contained" size="medium">
                    Medium
                </Button>

                <Button variant="contained" size="large">
                    Large
                </Button>
            </section>

            <section
                id="icon-section"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <h1>Button Icon</h1>
                <Button
                    variant="outlined"
                    startIcon={<DeleteOutlineOutlinedIcon />}
                    color="error"
                >
                    Icon Infront
                </Button>

                <Button
                    variant="outlined"
                    endIcon={<ModeEditOutlineOutlinedIcon />}
                    color="success"
                >
                    Icon Behind
                </Button>

                <IconButton color="warning">
                    <InsertEmoticonOutlinedIcon />
                </IconButton>
            </section>
        </div>
    );
};

export default CustomButton;
