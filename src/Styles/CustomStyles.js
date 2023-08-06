import { makeStyles } from "@mui/styles";
const drawerWidth = "250px";

export const CustomStyles = makeStyles((theme) => ({
    cardStructure: {
        minWidth: '550px',
        borderRadius: '25px !important',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeaderStyle: {
        background: '#F6F6F6',
        padding: '36px !important',
    },
    contentSection: {
        maxHeight: "300px !important",
        overflowY: 'auto !important',
    },
    drawerStyles: {
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4054C8',
            padding: "120px 36px 36px 36px",
            margin: '40px',
            borderRadius: '25px',
        },
    },
    menuTextStyles: {
        [`& .MuiTypography-root`]: {
            color: '#FFFFFF',
            fontSize: '18px',
            marginLeft:"-30px"
        },
    },
    menuDivider: {
        backgroundColor: "#8686DA"
    },
    nameList: {
        [`& .MuiTypography-root`]: {
            color: '#000000',
            fontSize: '14px',
            margin:'10px',
        },
    },
    nameStyle: {
        textDecoration :"none",
        color: "#000000",
        //padding: "50px 10px 10px 10px",
        paddingBottom: "-50px",
        paddingLeft: "10px",
        fontSize: '16px',
        alignItems: "center"
    }

}))