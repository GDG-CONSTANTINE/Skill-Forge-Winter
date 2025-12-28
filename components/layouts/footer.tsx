function Footer() {
  return (
    <div className="flex flex-col w-full mt-auto">
      <div className="w-full border-3 border-foreground/70 relative">
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
          <div
            key={position}
            className={`w-5 h-4 border-2 border-primary bg-[#CD8210] absolute ${position === 'top-left' ? '-top-2 -left-2.5' : ''}
                    ${position === 'top-right' ? '-top-2 -right-2.5' : ''}
                    ${position === 'bottom-left' ? '-bottom-2 -left-2.5' : ''}
                    ${position === 'bottom-right' ? '-bottom-2 -right-2.5' : ''}`}
          ></div>
        ))}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.2320938366984!2d6.590575599999999!3d36.258143800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f171000642d047%3A0x76df01546e1f5da2!2sSoCode!5e0!3m2!1sen!2sdz!4v1766920784493!5m2!1sen!2sdz" className="w-full h-28 rounded-md"
          loading="lazy" />
      </div>

      <div className="flex max-sm:flex-col gap-2 justify-between w-full pb-1 pt-5 opacity-70 mt-auto">
        <div className="max-sm:flex gap-2 items-center">
          <p>Starts At</p>
          <p className="font-bold">Monday 29th Dec 2025</p>
        </div>
        <div className="max-sm:flex gap-2 items-center">
          <p>
            At <strong>
              <a
                href="https://maps.app.goo.gl/3WBYrzwYTp4J4usA6"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Socode School
              </a>
            </strong>
          </p>
          <p>
            <a
              href="https://maps.app.goo.gl/3WBYrzwYTp4J4usA6"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Nouvelle ville, Constantine
            </a>
          </p>
        </div>
      </div>
    </div >
  )
}

export default Footer
