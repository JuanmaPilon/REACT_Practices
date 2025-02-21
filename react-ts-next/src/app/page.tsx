type Color = "red" | "blue" | "green";


type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
  background?: Color;
}

function Button({text, color, subtitle} : ButtonProps) {




  return (
    <button>
   {text}
    </button>
  )
}


function Page() {
  return (
    <div>
      <Button 
      text="Alo"
      background="red"
      color="blue"
      />
    </div>
  )
}
export default Page;