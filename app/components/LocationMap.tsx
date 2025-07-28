export const LocationMap: React.FC = () => {
    return (
        <div className="border-solid border-3 border-gray-800 rounded-sm w-full" style={{ height: 400 }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.54238843788175!2d20.925712652241668!3d52.16084393471811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719338166f218e1%3A0x54674f7b5fb8b53!2sStefana%20%C5%BBeromskiego%201A%2C%2005-090%20Raszyn!5e0!3m2!1spl!2spl!4v1753692794878!5m2!1spl!2spl"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}