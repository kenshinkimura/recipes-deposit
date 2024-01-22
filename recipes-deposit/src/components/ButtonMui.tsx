import {Button, ButtonProps} from "@mui/material";


export const ButtonMui = ({color}: ButtonProps) => {
    return (
        <div>
            <Button color={color}>Add recipe</Button>
        </div>
    )
}
