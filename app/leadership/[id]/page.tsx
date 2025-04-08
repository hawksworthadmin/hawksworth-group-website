import {createClient} from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProfilePage({ params }: Props) {

    const prismicClient = createClient();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const profile = await prismicClient.getByUID('people', params.id);

    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section with Profile Banner */}
            <section className="relative bg-gray-900 text-white overflow-hidden flex justify-center">
                <div className="absolute inset-0 bg-black opacity-80 z-[30]"></div>
                <img src={profile.data.avatar.url || ''} alt={profile.data.name || 'person'} className='absolute w-full z-0 object-center' />
                <div className="relative container mx-auto px-4 py-16 md:py-24 z-[40]">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl">
                            <img
                                src={profile.data.avatar.url || "/placeholder.svg"}
                                alt={profile.data.name || ''}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{profile.data.name}</h1>
                            <p className="text-xl md:text-2xl text-yellow-400 mb-4">{profile.data.role}</p>
                            <a
                                href={profile.data.linkedin_profile_url || ''}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-8 md:p-12">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Biography</h2>
                                <div className="text-gray-700 mb-8 leading-relaxed">
                                    <PrismicRichText field={profile.data.content} />
                                </div>

                                {/*<div className="grid md:grid-cols-2 gap-8">*/}
                                {/*    <div>*/}
                                {/*        <h3 className="text-xl font-bold mb-4 text-gray-800">Areas of Expertise</h3>*/}
                                {/*        <ul className="space-y-2">*/}
                                {/*            {profile.expertise.map((item, index) => (*/}
                                {/*                <li key={index} className="flex items-center">*/}
                                {/*                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>*/}
                                {/*                    <span className="text-gray-700">{item}</span>*/}
                                {/*                </li>*/}
                                {/*            ))}*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}

                                {/*    <div>*/}
                                {/*        <h3 className="text-xl font-bold mb-4 text-gray-800">Education</h3>*/}
                                {/*        <p className="text-gray-700 mb-6">{profile.education}</p>*/}
                                {/*    */}
                                {/*        <h3 className="text-xl font-bold mb-4 text-gray-800">Key Achievements</h3>*/}
                                {/*        <ul className="space-y-2">*/}
                                {/*            {profile.achievements.map((achievement, index) => (*/}
                                {/*                <li key={index} className="flex items-start">*/}
                                {/*                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2"></span>*/}
                                {/*                    <span className="text-gray-700">{achievement}</span>*/}
                                {/*                </li>*/}
                                {/*            ))}*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                            {/*<div className="bg-gray-50 p-8 md:p-12 border-t border-gray-200">*/}
                            {/*    <div className="flex flex-col md:flex-row md:items-center justify-between">*/}
                            {/*        <div>*/}
                            {/*            <h3 className="text-xl font-bold mb-2 text-gray-800">Contact {profile.name}</h3>*/}
                            {/*            <p className="text-gray-600">Have questions or want to discuss a potential collaboration?</p>*/}
                            {/*        </div>*/}
                            {/*        <a*/}
                            {/*            href="/contact-us"*/}
                            {/*            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-colors"*/}
                            {/*        >*/}
                            {/*            Get in Touch*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        {/*<div className="mt-8 text-center">*/}
                        {/*    <a href="/contact-us" className="inline-flex items-center text-yellow-500 hover:text-yellow-600">*/}
                        {/*        <svg*/}
                        {/*            className="w-5 h-5 mr-2"*/}
                        {/*            fill="none"*/}
                        {/*            stroke="currentColor"*/}
                        {/*            viewBox="0 0 24 24"*/}
                        {/*            xmlns="http://www.w3.org/2000/svg"*/}
                        {/*        >*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />*/}
                        {/*        </svg>*/}
                        {/*        Back to Leadership Team*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/*<section className="py-12 md:py-16 bg-gray-50">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <h2 className="text-2xl font-bold mb-8 text-center">Meet More Team Members</h2>*/}

            {/*        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">*/}
            {/*            {profiles*/}
            {/*                .filter((p) => p.id !== profile.id)*/}
            {/*                .slice(0, 4)*/}
            {/*                .map((relatedProfile) => (*/}
            {/*                    <a*/}
            {/*                        key={relatedProfile.id}*/}
            {/*                        href={`/profile/${relatedProfile.id}`}*/}
            {/*                        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"*/}
            {/*                    >*/}
            {/*                        <div className="aspect-square overflow-hidden bg-gray-200">*/}
            {/*                            <img*/}
            {/*                                src={relatedProfile.image || "/placeholder.svg"}*/}
            {/*                                alt={relatedProfile.name}*/}
            {/*                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                        <div className="p-4">*/}
            {/*                            <h3 className="font-bold text-lg group-hover:text-yellow-500 transition-colors">*/}
            {/*                                {relatedProfile.name}*/}
            {/*                            </h3>*/}
            {/*                            <p className="text-gray-600">{relatedProfile.role}</p>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    )
}

