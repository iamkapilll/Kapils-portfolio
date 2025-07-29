export const LoadingScreen = () =>{
    return( 
    <div className="fixed inset-0 z-50 bg-black text-gray-100 fex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
            Hello world <span className="animate-blink ml-1"> | </span>
        </div>
        
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {""}

            </div>

        </div>
    </div>
    )
}