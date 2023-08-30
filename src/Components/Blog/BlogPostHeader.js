// Importing necessary components and libraries
import { Flex, Container, VStack, HStack, Text, Tag } from '@chakra-ui/react'
import { Contacts } from '@/Components/Contacts'
import { MotionFlex } from '@/Components/Motion/MotionFlex'
import { Image } from '@/Components/Image'
import { fadeInUp } from '@/styles/animations'
import NextLink from 'next/link'

// Defining the BlogPostHeader component which takes 'post' prop
export const BlogPostHeader = ({ post }) => (
    // Container with a maximum width
    <MotionFlex {...fadeInUp({ initial: 20 })}>
        <Container maxW="container.md" px="0">
            {/* Vertical stack for content alignment */}
            <VStack spacing="4" align="flex-start" w="100%">
                {/* Flex container for header content */}
                <Flex w="100%" justify="space-between" align="center">
                    {/* Horizontal stack for profile information */}
                    <HStack spacing="2" align="flex-start">
                        {/* Displaying profile image */}
                        <Image
                            src="/images/profile.jpg"
                            alt="BadEnd"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        {/* Vertical stack for profile text */}
                        <VStack spacing="0" align="flex-start">
                            <Text fontWeight="bold">BadEnd</Text>
                            <Text fontSize="sm" color="mocha.blue">
                                {post.meta.publishedAt}
                            </Text>
                        </VStack>
                    </HStack>
                    {/* Contact information */}
                    <Contacts ignore={['location']} />
                </Flex>
                {/* Horizontal stack for displaying tags */}
                <HStack spacing="2" align="flex-start">
                    {/* Mapping through each tag and creating a Tag */}
                    {post.meta.tags.map((tag, index) => (
                        <NextLink key={tag} href={`/blog/tag/${tag}`}>
                            <Tag key={index}>{tag}</Tag>
                        </NextLink>
                    ))}
                </HStack>
            </VStack>
        </Container>
    </MotionFlex>
)