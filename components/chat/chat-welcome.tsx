
interface ChatWelcomeProps {
    name: string;
    type: "channel" | "conversation";
};
export const ChatWelcome = ({
    name,
    type
}: ChatWelcomeProps) =>{
    return (
        <div>
            Chat Welcome !
        </div>
    )
}