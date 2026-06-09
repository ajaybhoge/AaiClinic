"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, RotateCcw, Volume2, VolumeX, MessageCircle, Radio, Calendar, Info, Clock, FastForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export default function AkashwaniInterview() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure client-side only rendering for standard React hydration safety
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      const newTime = value[0]
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVol = value[0]
    setVolume(newVol)
    if (audioRef.current) {
      audioRef.current.volume = newVol
      audioRef.current.muted = newVol === 0
    }
    setIsMuted(newVol === 0)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    audioRef.current.muted = nextMuted
    if (!nextMuted && volume === 0) {
      setVolume(0.5)
      audioRef.current.volume = 0.5
    }
  }

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds))
    }
  }

  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate)
    if (audioRef.current) {
      audioRef.current.playbackRate = rate
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const hrs = Math.floor(time / 3600)
    const mins = Math.floor((time % 3600) / 60)
    const secs = Math.floor(time % 60)

    const formattedMins = mins.toString().padStart(2, "0")
    const formattedSecs = secs.toString().padStart(2, "0")

    if (hrs > 0) {
      return `${hrs}:${formattedMins}:${formattedSecs}`
    }
    return `${formattedMins}:${formattedSecs}`
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919405003087"
    const message = "Hello! I listened to Dr. Maitreyee's Akashwani radio interview about child health and Ayurveda, and I would like to consult or ask a question."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-green/20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-modern-dots opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green/10 rounded-full text-sm font-semibold text-primary-green mb-4 border border-primary-green/20">
            <Radio className="w-4 h-4 animate-pulse text-red-600" />
            <span>विशेष आकाशवाणी संवाद • Special Radio Broadcast</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary leading-tight mb-6">
            लहान बाळांचे सुदृढ़ आरोग्य आणि आयुर्वेद!
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed font-sans">
            Listen to Dr. Maitreyee Limaye's insightful interview on Akashwani Ahilyanagar (100.1 MHz) on nurturing child health using traditional Ayurvedic practices and natural remedies.
          </p>
        </div>

        <Card className="border border-gray-150 shadow-2xl bg-white rounded-3xl overflow-hidden max-w-5xl mx-auto transform hover:shadow-3xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left Column: Image with visual overlays */}
              <div className="lg:col-span-5 relative h-[300px] lg:h-auto min-h-[350px] bg-dark-green overflow-hidden">
                <Image
                  src="/images/dr_limaye_akashwani.png"
                  alt="Dr. Maitreyee Limaye Interview on Akashwani"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Vintage Radio Broadcast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
                      On Air
                    </span>
                    <span className="bg-black/45 text-white/95 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      100.1 MHz
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-orange-400 font-semibold tracking-wide uppercase">All India Radio (AIR)</p>
                    <h4 className="text-xl font-bold font-serif leading-tight">Akashwani Ahilyanagar</h4>
                    <div className="flex items-center gap-4 text-xs text-white/80 pt-1 border-t border-white/20">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-400" />
                        Radio Interview
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        47 Mins Talk
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Audio Player & Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-6">
                  {/* Marathi and English texts from the reference */}
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-green pl-4">
                      <p className="text-xl font-bold text-primary-green leading-snug font-serif">
                        "लहान बाळांचे सुदृढ़ आरोग्य आणि आयुर्वेद!"
                      </p>
                      <p className="text-sm text-text-secondary mt-1 italic">
                        "Healthy development of little children and the wonders of Ayurveda."
                      </p>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed font-sans">
                      या विषयावर झालेला संवाद ऐकण्यासाठी खालील प्लेअरचा वापर करा. आपल्या शंका विचारण्यासाठी किंवा तज्ज्ञ सल्ल्यासाठी थेट **WhatsApp** वर संपर्क साधा.
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans -mt-2">
                      (To listen to the complete discussion, use the audio player below. Click the WhatsApp button to message us directly.)
                    </p>
                  </div>

                  {/* Hidden Audio Tag */}
                  <audio
                    ref={audioRef}
                    src="/audio/dr_limaye_akashwani.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Custom Player Controls */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-6 space-y-4 shadow-sm">
                    {/* Progress Slider */}
                    <div className="space-y-1">
                      <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                        className="cursor-pointer py-2 [&>[data-slot=slider-track]]:bg-slate-200 [&>[data-slot=slider-range]]:bg-primary-green [&>[data-slot=slider-thumb]]:bg-primary-green [&>[data-slot=slider-thumb]]:border-white"
                      />
                      <div className="flex justify-between text-xs text-text-secondary font-medium">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Skip & Play controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => skip(-10)}
                          className="text-text-secondary hover:text-primary-green hover:bg-slate-200/50 rounded-full w-10 h-10 transition-colors"
                          title="Rewind 10s"
                        >
                          <RotateCcw className="w-5 h-5" />
                        </Button>

                        <Button
                          onClick={togglePlay}
                          size="icon"
                          className="bg-primary-green hover:bg-dark-green text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                          title={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 fill-current" />
                          ) : (
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          )}
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => skip(10)}
                          className="text-text-secondary hover:text-primary-green hover:bg-slate-200/50 rounded-full w-10 h-10 transition-colors"
                          title="Forward 10s"
                        >
                          <FastForward className="w-5 h-5" />
                        </Button>
                      </div>

                      {/* Speed selector */}
                      <div className="flex items-center bg-slate-200/60 rounded-full p-1 text-xs">
                        {[1, 1.25, 1.5].map((speed) => (
                          <button
                            key={speed}
                            onClick={() => changeSpeed(speed)}
                            className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                              playbackRate === speed
                                ? "bg-primary-green text-white shadow-sm"
                                : "text-text-secondary hover:text-text-primary"
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>

                      {/* Volume controls */}
                      <div className="flex items-center gap-2 min-w-[120px] max-w-[150px]">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleMute}
                          className="text-text-secondary hover:text-primary-green p-0 w-8 h-8 rounded-full"
                          title={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4" />}
                        </Button>
                        <Slider
                          value={[isMuted ? 0 : volume]}
                          min={0}
                          max={1}
                          step={0.05}
                          onValueChange={handleVolumeChange}
                          className="cursor-pointer w-20 py-2 [&>[data-slot=slider-track]]:bg-slate-200 [&>[data-slot=slider-range]]:bg-primary-green [&>[data-slot=slider-thumb]]:bg-primary-green [&>[data-slot=slider-thumb]]:w-3.5 [&>[data-slot=slider-thumb]]:h-3.5 [&>[data-slot=slider-thumb]]:border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-text-primary flex items-center gap-1.5 justify-center sm:justify-start">
                      <Info className="w-4 h-4 text-primary-green" />
                      तज्ज्ञ सल्ल्यासाठी संपर्क साधा
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Consult with Dr. Maitreyee Limaye via WhatsApp.
                    </p>
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" />
                    WhatsApp Message करा
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
