import { Button, type ButtonProps } from '@mui/material'

export const ButtonMui = ({ color }: ButtonProps): JSX.Element => {
  return (
        <div>
            <Button color={color}>Add recipe</Button>
        </div>
  )
}
