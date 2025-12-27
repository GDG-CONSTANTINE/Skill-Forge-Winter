export default async function emailSendingHandler({ email, fullname, workshopTitle, workshopDate }
    : { email: string, fullname: string, workshopTitle: string, workshopDate: string }) {
    
    try {
        console.log("Sending email...", { email, fullname, workshopTitle, workshopDate });
        // handle use case 
        if (!email || !fullname || !workshopTitle || !workshopDate) {
            console.error("Missing Required Params")
            return;
        }

        // send email
        const response = await fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname, workshopTitle, userEmail: email, workshopDate }),
        })

        
        if (response.ok) {
            console.log("Email sent successfully");
            return;
        }
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Unknown error");
        }
    }
}