import { Button, type ButtonProps } from '@mui/material'

export const ButtonMui: React.FC = ({ color }: ButtonProps) => {
  return (
        <div>
            <Button color={color}>Add recipe</Button>
        </div>
  )
}
