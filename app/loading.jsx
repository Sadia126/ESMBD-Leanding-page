import Logo from '@/components/Shared/Buttons/Logo'

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary/5">
        <div className="animate-ping">
            <Logo/>
        </div>
    </div>
  )
}

export default loading