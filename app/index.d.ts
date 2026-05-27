declare interface PackageProps
{
    packageName: string;
    packageDesc: string;
    details: string[];
    price: string;
}

declare interface AlertProps {
  open: boolean
  type: "success" | "failure" | "empty"
  message: string
  duration?: number
  onClose: () => void
}

declare interface AlertState {
  open: boolean
  type: 'success' | 'failure' | 'empty'
  message: string
}