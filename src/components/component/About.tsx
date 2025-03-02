// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ankita Tiwari",
    role: "Proprietor",
    image: "/images/ankitaa-tiwari.jpeg",
  },
  {
    name: "Swati Tiwari",
    role: "SDE",
    image: "/images/swati-tiwari.jpeg",
    linkedin: "https://www.linkedin.com/in/swati-tiwari-a02b2a237/",
  },
  {
    name: "Amit Kumar",
    role: "Business Head",
    image: "/images/amit-kumar.jpeg",
    linkedin: "https://www.linkedin.com/in/amit-kumar-226751159/",
  },
  {
    name: "Ritik Tiwari",
    role: "City Head",
    image: "/images/ritik-tiwari.jpeg",
    linkedin: "https://www.linkedin.com/in/ritik-tiwari-ab06a82b9/",
  },
  {
    name: "Suraj Pandey",
    role: "SDE",
    image: "/images/dummy-image.jpg",
    linkedin: "https://www.linkedin.com/in/suraj-pandey-8b9693199/",
  },
  {
    name: "Ashutosh Dube",
    role: "SDE",
    image: "/images/dummy-image.jpg",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-dube-306544236/",
  },
];

export function About() {
  const imageURL = "/images/property/about.jpg";
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={imageURL}
              alt="Modern Home"
              width={600}
              height={400}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Us
                </h1>
                <p className="text-muted-foreground max-w-[600px] text-center align-text-bottom md:text-xl">
                  Auctionwale specializes in selling properties from Bank and
                  Financial Institution.Auctionwale is a cutting-edge auction
                  company that combines traditional expertise with innovative
                  technology to provide a unique and unparalleled auction
                  experience. Our mission is to connect buyers and sellers from
                  around the world, showcasing rare and unique items in a
                  transparent and fair marketplace.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Our Values</h3>
                    <p className="text-muted-foreground">
                      Our team of experienced professionals is dedicated to
                      providing expert knowledge and guidance throughout the
                      auction process.We leverage the latest technology to
                      ensure a seamless and engaging auction experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Our Services</h3>
                    <p className="text-muted-foreground">
                      - Live and online auctions
                    </p>
                    <p className="text-muted-foreground">
                      - Rare and unique item sourcing
                    </p>
                    <p className="text-muted-foreground">
                      - Appraisals and valuations
                    </p>
                    <p className="text-muted-foreground">
                      - Marketing and promotion
                    </p>
                    <p className="text-muted-foreground">
                      - Logistics and shipping
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Responsiveness</h3>
                    <p className="text-muted-foreground">
                      At Auctionwale, we strive to build long-lasting
                      relationships with our clients, providing a personalized
                      and tailored experience that exceeds expectations. Join us
                      and discover a new era in auctions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced real estate professionals is dedicated
                  to providing exceptional service and helping our clients to
                  achieve their goals.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
