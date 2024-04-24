"use client";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { useState } from "react";

interface QueryProviderProps {
    children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({
    children
}) => {
    const [quertClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={quertClient}>
            {children}
        </QueryClientProvider>
    );
}

export default QueryProvider;