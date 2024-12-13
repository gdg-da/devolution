import SpeakerManual from '@/components/SpeakerManual'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Speaker Manual | Dev-o-lution',
    description: 'Guidelines and information for speakers at the Dev-o-lution conference',
}

export default function SpeakerManualPage() {
    return <SpeakerManual />
}