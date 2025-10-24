import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Contact3 from "@/components/sections/contacts/Contact3";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TeamDetails1 from "@/components/sections/teams/TeamDetails1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getTeamMembers from "@/libs/getTeamMembers";
import { notFound } from "next/navigation";
const items = getTeamMembers();

export default async function TeamDetails({ params }) {
    const { slug } = params;

    const isExistItem = items?.find(({ slug: memberSlug }) => memberSlug === slug);
    if (!isExistItem) {
        notFound();
    }
    const { name } = isExistItem;

    return (
        <div>
      <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                <HeroInner title={name} text={name} />
                <TeamDetails1 currentItemSlug={slug} />
                <Contact3 />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}

export async function generateStaticParams() {
    const items = getTeamMembers();
    return items
        ?.filter(member => typeof member.slug === "string" && member.slug.length > 0)
        .map(({ slug }) => ({ slug }));
}