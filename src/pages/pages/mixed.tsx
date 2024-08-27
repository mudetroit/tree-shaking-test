import { BeakerIcon } from '@heroicons/react/24/solid'
import { Smiley } from "@phosphor-icons/react";

export default function PhosphorOnlyPages() {
    return (
        <div>
            <h1>Mixed Icon sets</h1>
            <BeakerIcon className="size-6 text-blue-500" />
            <Smiley className="size-6 text-blue-500" />
        </div>
    )
}