export default function emailBody({ 
  fullname, 
  workshopTitle,
  workshopDate
}: { 
  fullname: string; 
  workshopTitle: string; 
  workshopDate: string
}) {
  return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Workshop Registration Confirmed</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
            }
            .email-container {
                max-width: 600px;
                margin: 30px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
            }
            .header {
                background-color: #5a6c7d;
                padding: 30px 20px;
                text-align: center;
                color: #ffffff;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 30px;
                color: #333333;
                line-height: 1.6;
            }
            .note {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                margin: 20px 0;
                font-size: 14px;
                color: #555;
                border-left: 3px solid #5a6c7d;
            }
            .footer {
                padding: 20px;
                text-align: center;
                color: #999;
                font-size: 12px;
                background-color: #f9f9f9;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Workshop Registration Confirmed</h1>
            </div>
            
            
            <div class="content">
                <p>Hello <strong>${fullname}</strong>,</p>
                
                <p>Congratulations! You're now registered for the workshop titled <strong>${workshopTitle}</strong>.</p>
                
                <p>We're excited to have you join us on <strong>${workshopDate}</strong>. Please keep an eye on your inbox for more details, including the event time, location, and access information.</p>
                
                <div class="note">
                    <strong>Note:</strong> If you have any questions, feel free to reply to this email.
                </div>
                
                <p>Thank you,<br><strong>GDG Constantine</strong></p>
            </div>
            
            <div class="footer">
                &copy; 2025 GDG Constantine. All rights reserved.
            </div>
        </div>
    </body>
    </html>`
  )
}