import { Button, Modal, ModalDialog } from "@mui/joy"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { globalState } from "../../../state/global/global.atom"

export const ModalLogout = ({open,setOpen})=>{
    const navigate = useNavigate()
    const [global,setGlobal] = useRecoilState(globalState)
    return(
        <Modal open={open} onClose={setOpen}>
            <ModalDialog size="sm" sx={{
            overflowX: "hidden !important",
            boxShadow: "lg",
            borderRadius: "xl",
            p: 3,
            m:"10px",
          }}>

            <div>
                <h1 style={{
                    fontSize:1.5+"rem"
                }}>Are you sure you want to logout?</h1>
                <Button  variant="outlined" onClick={()=>{
                    setOpen(false)
                }} sx={{
                    marginRight: "10px"
                }}>No, Please</Button>
                <Button color="danger"  variant="outlined"  onClick={()=>{
                    setOpen(false)
                    setGlobal({
                        ...global,
                        isAuthenticated:false,
                        token:null,
                    })
                    localStorage.removeItem("token")
                    localStorage.removeItem("userAtom")
                    navigate("/login")
                }}>Yes, Of Course</Button>
            </div>
            </ModalDialog>
        </Modal>   
    )
}