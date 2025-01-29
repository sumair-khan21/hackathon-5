"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Share2, ThumbsUp, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

interface Comment {
  id: number
  text: string
  timestamp: string
}

interface BlogPost {
  id: number
  title: string
  date: string
  image: string
  likes: number
  comments: Comment[]
  showComments: boolean
  showFullContent: boolean
}

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    date: "10 February 2022",
    image: "/why 2.png",
    likes: 94,
    comments: [],
    showComments: false,
    showFullContent: false,
  },
  {
    id: 2,
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    date: "10 February 2022",
    image: "/pizza.png",
    likes: 88,
    comments: [],
    showComments: false,
    showFullContent: false,
  },
  {
    id: 3,
    title: "Curabitur rutrum velit ac congue malesuada",
    date: "10 February 2022",
    image: "/why 1.png",
    likes: 92,
    comments: [],
    showComments: false,
    showFullContent: false,
  },
]

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("blogPosts")
      return saved ? JSON.parse(saved) : initialBlogPosts
    }
    return initialBlogPosts
  })
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [currentPostId, setCurrentPostId] = useState<number | null>(null)
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
  }, [blogPosts])

  const handleLike = (postId: number) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)),
    )
  }

  const handleToggleComments = (postId: number) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, showComments: !post.showComments } : post)),
    )
  }

  const handleShare = (postId: number) => {
    setCurrentPostId(postId)
    setShareDialogOpen(true)
  }

  const handleAddComment = (postId: number) => {
    const commentText = newComments[postId]
    if (commentText && commentText.trim() !== "") {
      setBlogPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  {
                    id: Date.now(),
                    text: commentText.trim(),
                    timestamp: new Date().toLocaleTimeString(),
                  },
                ],
              }
            : post,
        ),
      )
      setNewComments((prev) => ({ ...prev, [postId]: "" }))
    }
  }

  

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#FF9F0D]">Blog Post</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 text-white">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-transparent w-11/12 border-[#FF9F0D] text-white">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <time className="text-sm sm:text-base text-[#FF9F0D]">{post.date}</time>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-4 mb-4 sm:mb-6 line-clamp-2">{post.title}</h3>
              <Link href='/blog'>
              <Button
            variant="outline"
            className="border-[#FF9F0D] bg-transparent text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white rounded-full px-6 py-3"
          >
            Read More
          </Button>
              </Link>
              {/* <button
                onClick={() => handleToggleFullContent(post.id)}
                className="text-sm sm:text-base text-white hover:text-[#FF9F0D] transition-colors"
              >
                {post.showFullContent ? "Read Less" : "Read More"}
              </button> */}
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col">
              <div className="flex justify-between items-center w-full mb-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors"
                >
                  <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">{post.likes}</span>
                </button>
                <button
                  onClick={() => handleToggleComments(post.id)}
                  className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">{post.comments.length}</span>
                  {post.showComments ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleShare(post.id)}
                  className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              {post.showComments && (
                <div className="w-full">
                  <ScrollArea className="h-32 w-full mb-2">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="mb-2">
                        <p className="text-xs text-gray-400">{comment.timestamp}</p>
                        <p className="text-sm bg-gray-700 p-2 rounded-lg">{comment.text}</p>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={newComments[post.id] || ""}
                      onChange={(e) => setNewComments((prev) => ({ ...prev, [post.id]: e.target.value }))}
                      placeholder="Write a comment..."
                      className="flex-grow bg-gray-700 text-white text-sm"
                    />
                    <Button onClick={() => handleAddComment(post.id)} size="sm">
                      Post
                    </Button>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Share this post</DialogTitle>
            <DialogDescription>Copy the link below to share this blog post</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input readOnly value={`https://yourblog.com/post/${currentPostId}`} className="bg-gray-700 text-white" />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(`https://yourblog.com/post/${currentPostId}`)
              }}
            >
              Copy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}