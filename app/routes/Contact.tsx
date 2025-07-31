import { lazy, Suspense } from "react";
import { PageContainer } from "~/components/PageContainer";


const ContactView = lazy(() => import('../Pages/ContactView'));
const Contact = () => {
  return (
    <PageContainer>
      <Suspense fallback={<div>loading...</div>}>
        <ContactView />
      </Suspense>
    </PageContainer>
  );
}

export default Contact;