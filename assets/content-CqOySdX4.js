import{n as e}from"./chunk-DHfXtvq1.js";var t=`---
title: "A year of chasing AI: learning to assist AI in programming"
description: "Kaibin reflects on a year at MarsWave: moving from AI-assisted coding to engineers organizing context, defining tasks, and assisting AI in programming."
slug: "a-year-chasing-ai"
date: "2026-06-02"
author: "Kaibin"
authorAvatar: "https://avatars.githubusercontent.com/u/193473096?v=4"
tags: ["AI Native", "Engineering", "Cursor", "Claude", "ColaOS"]
draft: false
---

## A year of chasing AI: learning to assist AI in programming

Recently I have talked with quite a few engineer friends and found that many teams still have almost nobody using AI to write code. Some people have never tried it. Some tried it and decided it was unreliable. I understand that, because a year ago I was in a similar place.

Looking back now, at MarsWave, not using AI has become hard to imagine.

In January 2025, I left a To B tooling company and joined MarsWave as its first employee. At that time, there was nothing: no product, no process, and the team was still being formed. The AI everyone saw did not seem very smart yet. It could only do small, independent tasks with clear limits and constraints. We were also trying to find a direction from those small tasks, so we started building a podcast audio generation tool.

In the beginning, the first thing every engineer did after joining was open a Cursor account.

In the first half of 2025, Cursor was already a powerful boost for engineers, especially its autocomplete, which is still industry-leading today. Back then, an engineer could type just a few words and it would complete a line, sometimes even a whole function. But most of the time, the engineer still had to think through the logic, read documentation, and debug errors.

AI was clearly not able to replace people yet. When we were doing cluster deployment, the solution AI gave looked complete, with commands laid out one after another. Ask it whether it would work, and it would always say yes. Then we ran it, and it blew up. In the end, we still had to read issues and documentation ourselves to solve the problem. Overall, productivity improved, but the core mode was still engineer-led. AI was just an accelerator.

At that time, I really thought: AI is a good tool, but engineers are still irreplaceable.

Then time quickly moved to the second half of 2025. Claude 4.5 arrived and changed everyone's way of working. From that point on, the online discussion about engineers being replaced by AI also grew louder.

I can no longer say exactly which day it happened, but around that time I suddenly realized that I had shifted from "writing code" to "reading code."

When a requirement came in, I no longer opened the editor and started typing from the first line. I would first describe the requirement simply and ask AI to produce a plan.

My work became a discussion with AI about where the risks were, whether we should plan ahead, and how to handle historical data.

From time to time, operations teammates started sharing internal tool pages they had built, or knowledge bases for auto-answering bots. They were not engineers, and they had not systematically learned programming, but they described their requirements clearly, provided complete context, and the final results were directly usable.

I honestly felt a little dazed. In the past, this kind of work would definitely have been assigned to frontend. Now an operations teammate seemed able to build it in one evening. It was hard to say it was elegant, but it worked.

That was the moment I really felt that the rules had changed.

Now inside the team, the fixed boundaries between product, engineering, and operations are gone. Everyone is producing code. ColaOS code is written together by everyone's AI across the company. Almost all code has been generated, modified, or reviewed by AI.

From today's perspective, engineers in the delivery process have not simply changed from "producers" into "reviewers." More accurately, engineers are now responsible for putting problems into a position where AI can handle them.

Take an online bug: a user reports that a certain flow cannot complete. In the past, I would read logs myself, set breakpoints, and trace through the call chain. Now I first gather the frontend error, backend logs, user operation path, and relevant code sections, then hand them to AI.

If the information is good, it can locate the problem in five minutes.
If the information is poor, it can go in circles with you for an hour and finally give you an answer that looks reasonable but is completely useless.

I have seen non-engineering teammates chat with AI for more than 50 rounds and still fail to solve a problem. It was not that AI was incapable. It was that they did not know what information to provide. They threw everything in at once, and AI was drowned by the noise.

An experienced engineer, however, often has an intuition for which layer the problem may be in. Frontend state, API parameters, async tasks, permissions, cache, database constraints: they know which ones to check first and which ones to leave for later. So they provide only five or six key pieces of information, and the problem can be contained within three rounds.

This year I have increasingly felt that the real gap is not whether someone can use AI, but whether they can organize context.

This ability is not only useful when writing code.

The current approach is to organize the requirement scenario, performance requirements, deployment environment, and existing tech stack into a document, then ask AI to compare solutions first. It will list the pros and cons of each option, suitable scenarios, and potential pitfalls. What we need to do is judge whether it is right and whether it fits us.

You do not necessarily have to be an expert, but you do need to ask the question clearly, and you need to judge whether the answer has gone off track.

The efficiency gap is genuinely dramatic. Early on, two developers spent a month delivering the first version of ListenHub, which could only generate podcast audio. Now, in the same month, we can already build ColaOS: a product that ships on both Mac and Windows, has a soul, writes logs for you, and helps you operate the whole computer.

So after a year of chasing AI, my biggest gain was not learning which model to use or switching to which tool.

It was accepting one thing: the old way of working, where I wrote code myself, read documentation myself, and carried delivery myself, is not coming back. Not because it was bad, but because the efficiency gap is too large to pretend not to see.

It used to be AI assisting me in programming.
Now, much of the time, I am assisting AI in programming.

I am responsible for breaking down the task clearly, putting the context in place, and stating the boundaries and acceptance criteria. AI is responsible for executing quickly. But whether the final result can go online, and who is responsible when something goes wrong, is still a human matter.

So if someone asks me whether it is too late to enter AI now, my answer is no.

But the best thing to chase is not "which model just got updated." Models will keep changing, and tools will keep changing. What is truly worth chasing is whether your way of working has changed because of these things.
`,n=`---
title: "From All-Hands Builder to AI Native: a veteran programmer's repositioning"
description: "Zili reflects on the shift from ListenHub to ColaOS: from AI-assisted development to making AI produce reliable engineering output in an AI Native team."
slug: "from-all-hands-builder-to-ai-native"
date: "2026-06-03"
author: "Zili"
authorAvatar: "https://avatars.githubusercontent.com/u/215250293?v=4"
tags: ["AI Native", "Builder", "Engineering", "ColaOS"]
draft: false
---

## From All-Hands Builder to AI Native: a veteran programmer's repositioning

## My Background

I started working in 2013, and I entered the industry through mobile development. At first I worked at a small company that had been "a startup for eight years." Two years later, I joined a listed company and stayed there for nearly ten years.
At the end of June 2025, I joined MarsWave. In terms of age, I am right in mid-career. In terms of today's internet industry, I am already past the age when people say engineers should have "graduated."

This post is mainly about how my view of my own role has changed since joining MarsWave.

## Eight Months on ListenHub

### Traditional Development

When I first joined MarsWave, I was mainly responsible for the mobile side of ListenHub.

That part of the work was not unfamiliar to me.
The product was new, and the team was new, but mobile engineering itself was still inside my comfort zone.
Architecture design, framework selection, development process, online release: I had done these things for many years.

During this stage, I started using AI to help with development. At the time I mainly used Cursor. Most of the usage was tab completion, and I would also ask it to generate some template code.
But I rarely let it write complete logic. Most of the time, I was still the one writing, and it was filling things in beside me.
Even so, it felt impressive at the time. Tab completion in particular could often infer the next piece of code I wanted to write from the context. It felt as if it really "understood" me.

### All-Hands Builder

The part that was truly different was the way we collaborated.
In more mature companies, work used to feel like a fixed chain: product defines the requirement, UI provides the design, engineering implements it, and QA verifies it.
Everyone had a relatively clear position, and things moved forward through a familiar process.
In large teams, engineers usually have limited room to participate in decisions. More often, we are executors, responsible for turning requirements into code.

During the ListenHub stage, however, we emphasized all-hands Builder.
Everyone needed to make more active judgments, and everyone had more chances to participate in the whole process from requirement to delivery.
For a traditional engineer, this change was obvious.
In the past, engineering naturally sat at the center of implementation.
For a requirement to become code, it usually had to pass through engineering.
Now that implementation capability has been amplified by AI, many roles can get closer to code more directly.
Engineers are no longer just "the people who can write code."

One moment that really affected me was when a QA teammate fixed an online bug with the help of AI.
I was surprised and impressed, and I also felt a little sense of crisis.
In the past, I assumed online issues needed engineers to locate and fix them. That was a work boundary I knew very well.
At that moment, I suddenly realized that this boundary was becoming thinner.
Other people are improving, models are improving, and I cannot keep standing inside the old way of working.

During the eight months on ListenHub, I was still mainly using a traditional development style. AI was mostly assisting me from the side.
But all-hands Builder made me realize that the boundary of engineering was being redefined.

## Three Months on ColaOS

In March 2026, we shifted to ColaOS. This was an even bigger change for me.
I am mainly responsible for the App part of ColaOS. It is the desktop client, and it is the input and output GUI for the Agent.

### The First Shock

After one model capability upgrade, I clearly felt that AI had taken another step forward.
Once I really used it, I realized that it could complete many complex requirements, break down the steps by itself, and deliver a running result.
Compared with my first experience with Cursor, this felt more like seeing a colleague who could truly work independently.
At least for many concrete coding tasks, it was more capable than I had imagined.

### Path Dependence

While working on ColaOS, I clearly felt the existence of path dependence.
**What limits imagination is not what we do not know, but precisely what we already know.**
Programmers know too many technical details. The more we know, the more afraid we sometimes become to try. Before we even start, our mind has already run through a failure path.
Over time, caution becomes a kind of inertia.
It makes us look more professional, but it can also make us more conservative.

What I saw from non-engineering teammates was different.
They do not have as much technical path dependence. Instead, they trust AI more and dare to use AI more.
They directly throw problems to AI and ask it to read code, make prototypes, change interfaces, locate problems, and even try to fix bugs.
Many times, it is not that they do not understand the risks. It is that they are not blocked by the risks from the very beginning.
This made me realize that I should learn from them.
I used to think that the more technical details you knew, the more accurate your judgment would be. Now I am starting to realize that knowing too much can also limit imagination.
Especially when AI capability is changing so quickly, many old judgments like "this cannot be done," "this is hard to do," or "this is not worth trying" may need to be re-evaluated.

### AI Native

By the ColaOS stage, we had also moved from all-hands Builder into AI Native.
If all-hands Builder means everyone can participate in building with the help of AI, then AI Native means many things are designed around AI from the very beginning.
Product shape, interaction patterns, engineering implementation, and debugging are no longer just places where AI is treated as an auxiliary tool. AI has become part of the way we work.

For me personally, the biggest change was the development style.
During the ColaOS stage, I started handing many concrete implementations to AI.
This was completely different from how I used it during the ListenHub stage.

Before, I wrote code and AI assisted me.
Now, I describe the goal, provide context, judge the plan, and then let AI complete the implementation.
Of course, this does not mean I throw a requirement or a problem to AI and call it done.
I ask it to read the relevant code first, then describe the problem and the goal. Then I ask it to produce a plan and review that plan from different angles. After implementation, I still need to look at boundary conditions, error paths, and maintainability.
Finally, the result still needs to be guarded through manual experience, test verification, logs, rollout, and automated tests.

My mindset also changed a lot. I began to trust AI.

## Repositioning

Looking back at these two stages, the change in me is quite clear.

During the ListenHub stage, I started using AI, but it was mainly an assistant. During the ColaOS stage, AI began to take on more concrete implementation work.
I also gradually shifted from "checking whether AI wrote something wrong" to "figuring out how to make AI write things right more consistently."
In the past, I cared more about whether I could produce output reliably. Now I care more about whether I can make AI produce output reliably.

This does not mean engineers are no longer important.
Quite the opposite. Breaking down problems, describing requirements precisely, judging technical plans, and controlling quality have become more important.
Technical ability has not become invalid. It is just being called in a different way.
My transition is not about leaving coding. It is about making AI produce reliably.

This is a bit like the phrase people say online: **believe in the power of belief**.
I used to think that sounded a little abstract. Now, in AI development, I can understand it a bit better.
Only when we trust AI the way we trust a colleague can we truly bring out its capability.

I have not fully figured out the final form of a "veteran engineer" in an AI Native team, because I am still evolving slowly too.
But at least now I know that the experience I accumulated over the past decade-plus has not become invalid. It just needs to be used in a different way.
`,r=`---
title: "The evolution of the Windows sandbox design in ColaOS"
description: "Gaoyang explains ColaOS's Windows fshook sandbox: from Detours-based file IO hooks to process confinement, policy delivery, logging, and violation feedback in production."
slug: "colaos-windows-sandbox-design-evolution"
date: "2026-06-04"
author: "Gaoyang"
authorAvatar: "https://avatars.githubusercontent.com/u/734818?v=4"
tags: ["Windows", "Sandbox", "Detours", "Security", "ColaOS"]
draft: false
---

## The evolution of the Windows sandbox design in ColaOS

Before launching the Windows internal beta of ColaOS, we considered that Windows itself is relatively fragile from a security perspective, and that we cannot guarantee the commands generated by large language models are 100% defect-free. So we designed a sandbox mechanism to put the commands produced by the model inside a cage.

Because we took security seriously, we quickly researched the problem and came up with a solution: use Microsoft's [Detours](https://github.com/microsoft/Detours) to hook a series of operating-system file IO functions, so we could intercept the target file path being read or written and block illegal paths.

## 1. How it works

Microsoft Detours is essentially an Inline Hook framework. It modifies the machine instructions at the beginning of a target function, redirects execution flow to your own function, and saves the overwritten original instructions into a Trampoline function so the original function can still be called later.

For example, assume the current operating system is 32-bit and the function we want to modify is \`WriteFile\`. Its assembly instructions look like this:

\`\`\`asm
55           push ebp
8B EC        mov  ebp, esp
83 EC 28     sub  esp, 0x28
53           push ebx
56           push esi
57           push edi
8B 7D 08     mov edi, [ebp+08h]
...remaining instructions omitted
\`\`\`

**Code 1.1 Original WriteFile instructions**

After the hook is installed, the instructions become something like this:

\`\`\`asm
E9 XX XX XX XX   jmp 32-bit memory address
53               push ebx <--- mark this position; we will come back to it later
56               push esi
57               push edi
8B 7D 08         mov edi, [ebp+08h]
...remaining instructions omitted
\`\`\`

**Code 1.2 WriteFile instructions after hooking**

Compared with Code 1.1, the first 6 bytes in Code 1.2 have been overwritten and turned into a jump instruction. That address points to your custom function, which we will call \`MyWriteFile\`.

At this point, you may wonder: after this operation, were the original 6 bytes lost? Detours also allocates a new block of memory at the same time, which is the Trampoline function mentioned earlier. Its instructions look like this:

\`\`\`asm
55               push ebp
8B EC            mov  ebp, esp
83 EC 28         sub  esp, 0x28
E9 XX XX XX XX   jmp to the position of byte 6 in Code 1.2
\`\`\`

**Code 1.3 Trampoline function instructions**

When this Trampoline function is built, it does not copy the full original \`WriteFile\` instructions. It only copies the front bytes that were overwritten. After executing the first 3 instructions, it jumps back to byte 6 in the hooked version shown in **Code 1.2**, then continues executing the remaining instructions.

Here is a real usage example:

\`\`\`c++
// detours_writefile_hook.cpp
// Build: cl /EHsc detours_writefile_hook.cpp /link detours.lib
// Requires: Microsoft Detours (https://github.com/microsoft/Detours)

#include <windows.h>
#include <detours.h>
#include <cstdio>

// ── 1. Save the original function pointer (pTarget) ───────────────────
//    DetourAttach rewrites this pointer to point to the Trampoline
static BOOL (WINAPI *pTarget_WriteFile)(
    HANDLE       hFile,
    LPCVOID      lpBuffer,
    DWORD        nNumberOfBytesToWrite,
    LPDWORD      lpNumberOfBytesWritten,
    LPOVERLAPPED lpOverlapped
) = WriteFile;   // Initial value = real WriteFile address


// ── 2. Detour function (proxy) ────────────────────────────────────────
BOOL WINAPI MyWriteFile(
    HANDLE       hFile,
    LPCVOID      lpBuffer,
    DWORD        nNumberOfBytesToWrite,
    LPDWORD      lpNumberOfBytesWritten,
    LPOVERLAPPED lpOverlapped)
{
    // ── Pre-interception: print the content being written ─────────────
    printf("[HOOK] WriteFile called, %lu bytes: \\"%.*s\\"\\n",
        nNumberOfBytesToWrite,
        (int)nNumberOfBytesToWrite,
        (const char*)lpBuffer);

    // ── Call pTarget: at this point pTarget points to the Trampoline ──
    //    The Trampoline executes the overwritten original bytes, then
    //    jumps back to WriteFile+N to continue
    BOOL result = pTarget_WriteFile(
        hFile,
        lpBuffer,
        nNumberOfBytesToWrite,
        lpNumberOfBytesWritten,
        lpOverlapped
    );

    // ── Post-interception: check the return value ─────────────────────
    if (result)
        printf("[HOOK] WriteFile succeeded, wrote %lu bytes\\n",
            lpNumberOfBytesWritten ? *lpNumberOfBytesWritten : 0);
    else
        printf("[HOOK] WriteFile failed, GLE=%lu\\n", GetLastError());

    return result;
}


// ── 3. Attach / detach the hook ───────────────────────────────────────
static void AttachHook()
{
    DetourTransactionBegin();
    DetourUpdateThread(GetCurrentThread());

    // Rewrite pTarget_WriteFile to the Trampoline address
    // Also replace the first N bytes of WriteFile with JMP MyWriteFile
    DetourAttach(
        reinterpret_cast<PVOID*>(&pTarget_WriteFile),
        reinterpret_cast<PVOID>(MyWriteFile)
    );

    LONG err = DetourTransactionCommit();
    printf("[HOOK] AttachHook: %s (err=%ld)\\n",
        err == NO_ERROR ? "OK" : "FAILED", err);
}

static void DetachHook()
{
    DetourTransactionBegin();
    DetourUpdateThread(GetCurrentThread());

    // Restore the original bytes at the WriteFile entry point, and
    // restore pTarget_WriteFile to the real address
    DetourDetach(
        reinterpret_cast<PVOID*>(&pTarget_WriteFile),
        reinterpret_cast<PVOID>(MyWriteFile)
    );

    LONG err = DetourTransactionCommit();
    printf("[HOOK] DetachHook: %s (err=%ld)\\n",
        err == NO_ERROR ? "OK" : "FAILED", err);
}


// ── 4. Test entry point ───────────────────────────────────────────────
int main()
{
    // Create a test file
    HANDLE hFile = CreateFileA(
        "test_output.txt",
        GENERIC_WRITE, 0, nullptr,
        CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, nullptr
    );
    if (hFile == INVALID_HANDLE_VALUE) {
        printf("CreateFile failed: %lu\\n", GetLastError());
        return 1;
    }

    // ── Attach the hook ───────────────────────────────────────────────
    AttachHook();

    // From here on, all WriteFile calls pass through MyWriteFile
    const char* msg1 = "Hello from hooked WriteFile!\\n";
    DWORD written = 0;
    WriteFile(hFile, msg1, (DWORD)strlen(msg1), &written, nullptr);

    const char* msg2 = "Second write, still hooked.\\n";
    WriteFile(hFile, msg2, (DWORD)strlen(msg2), &written, nullptr);

    // ── Detach the hook ───────────────────────────────────────────────
    DetachHook();

    // After restoration, WriteFile executes directly and no longer
    // passes through the proxy
    const char* msg3 = "This write is NOT hooked.\\n";
    WriteFile(hFile, msg3, (DWORD)strlen(msg3), &written, nullptr);

    CloseHandle(hFile);
    printf("[MAIN] Done. Check test_output.txt\\n");
    return 0;
}
\`\`\`

**Code 1.4 A real C++ example**

If we trace the call chain for Code 1.4, it roughly looks like this:

\`\`\`text
WriteFile(...)
  → JMP MyWriteFile         ← the first 6 bytes have been replaced
      → pre-hook logging
      → pTarget_WriteFile() ← call the Trampoline
          → execute the original first 6 bytes
          → JMP WriteFile+6 ← jump back into the function body
          → return BOOL
      → post-hook logging
      → return result
\`\`\`

**Code 1.5 Call chain after hooking**

One extra note: to keep the demo simple, the program in **Code 1.4** only hooks calls inside the current process. If you want to hook another process, you need to wrap the hook into a DLL project, then use \`DetourCreateProcessWithDllW\` to start the target process you want to hook.

## 2. Application

The earliest version only hooked one write function. As soon as we put that into a production-like environment, it immediately fell apart. On Windows, there are too many entry points that can change file-system state, and the command line itself is a black box. If the model outputs "delete," "move," or "copy," all of those can bypass the single write entry point we originally imagined. Inside ColaOS, we formally built an engineered Detours sandbox named **fshook**. This section walks through the production pitfalls fshook encountered and the engineering tradeoffs we eventually made. This is currently one of the few implementations in China that dares to put LLM-generated commands directly into the system command line without getting users angry.

### 2.1 Expanding hooked functions from 1 to more than 20

Writing a file is only one of many ways to modify file-system state, and it is not even the most common exit. After reviewing the actual commands generated by the model, we found that the kernel entry points capable of changing file-system state were much broader. In fshook, we eventually covered these major categories:

- **Creating and opening files**: every write operation that lands on disk starts here.
- **Deletion**: including both single-file deletion and directory deletion.
- **Moving and renaming**.
- **Copying**: including several copy APIs from different eras and process models.
- **Renaming, truncating, and marking deletion through handles**: this is the easiest category to miss. Many programs obtain an already-open file handle, then directly use handle-level APIs to rename it or truncate the file to 0 bytes. They do not go through the earlier named APIs that take paths as arguments. Blocking only named APIs is not enough.
- **Replacing files**: atomic overwrite semantics.
- **Hard links and symbolic links**: if the link target lands outside the allowlist, it bypasses the path restriction.
- **Shell batch operations**: Explorer and PowerShell batch deletion use this exit. The parameter shape is also a double-null-terminated string list, which is especially tricky.
- **Child process creation**.
- **Optional read-only probing**: directory listing and attribute querying, mainly used when we need stricter control.

Write, delete, move, change attributes, rename, truncate EOF: missing any one of these hooks creates a hole. The "rename through handle" hook is especially important. During implementation, we not only need to block whether the source handle was opened out of bounds, but also decode the **target path** carried in the input parameters and check the allowlist again. Otherwise the model can escape by first creating a file inside the allowlist, then renaming it outside the allowlist.

### 2.2 No more recursive injection: process blacklist plus forced convergence to the system command line

As mentioned earlier, Detours provides \`DetourCreateProcessWithDllW\`, but it can only inject the entry process. We once tried to nest another injection inside the child-process creation hook to achieve recursive injection. This approach was quickly abandoned during ColaOS gray release for three reasons:

- **Load timing**: Detours itself depends on a set of helper code running inside the target process to finish hooking. If we nest another injection while the child process has just been suspended and the loader has not finished running, it triggers all kinds of races. The crash rate was intolerable.
- **Trampoline re-entry**: once the function pointers in the parent process's hook table enter the child process, they are already invalid. Reusing them blindly writes to the wrong address.
- **Bitness mismatch**: a 32-bit parent process starting a 64-bit child process, or the reverse, cannot share the same DLL at all. You have to dispatch by bitness yourself, and it is very easy to hit image-format mismatch errors.

The final engineering approach simply **gave up recursive injection** and moved to two tracks:

1. **Use a process blacklist to converge "dangerous shells"**: a set of lowercase executable names is passed to the DLL through environment variables. At the moment a child process is created, the hook first parses the target program's file name. We deliberately avoid Windows's built-in command-line parsing API here to avoid triggering extra system module loading deadlocks during early DLL loading. If the name hits the blacklist, we reject it directly. The main things we cut off are script hosts and registry tools. Once those are allowed, an entire uncontrolled execution path is opened. Other pure external tools such as git, npm, node, python, and findstr are allowed. The tools the model should use are still available.

2. **Force the entry shell to converge to the system command line**: externally, we expose only a simplified command line. All complex logic is compressed into a one-shot execution mode that does not read autorun entries and has the simplest quoting semantics. This blocks the model's attempt to secretly start another shell layer, while constraining command parsing behavior to a stable and predictable subset. Combined with hard constraints in the tool description given to the model, only the command body is allowed, and the model is not allowed to wrap another shell. Once the entry point is forced to converge, we can block most paths even without recursive hooks.

### 2.3 Configuration through environment variables, logs through named pipes

After the DLL is injected, how does the main process tell it the allowlist and blacklist? How does it receive interception events in real time? fshook uses a pair of very Unix-like engineering choices:

- **Downstream configuration delivery**: use environment variables directly. When the main process starts the child process, it puts the policy into the environment. During DLL initialization, the DLL reads it once, splits by semicolon, normalizes everything to lowercase, forces allowlisted directories to include trailing separators, and caches everything in memory. Environment variables are naturally inherited by child processes, so the policy will not be lost even if there are recursive levels, even though the process blacklist has already stopped recursion in practice.

- **Upstream logs**: for each launch, create an **exclusive named pipe**. The path includes the process ID and a random suffix to avoid collisions. The main process waits on the pipe as the server, and the DLL connects as the client, converts wide-character logs into UTF-8 bytes, and writes them over. This channel is dedicated to debug logs and policy loading status. It is clean, independent, and does not pollute the target process's standard output.

- **Interception events**: use a structured text protocol over standard error. Each line is one record, with fields separated by vertical bars: fixed marker, interception type, UTC timestamp, process ID, matched interface name, and matched path. The main process parses each line into a fixed-size structure and then dispatches it. Pure file boundary violations go into one category, while process blacklist hits go into another. For the latter, we also fill the original message back into the model's input, so the next round can see that "this exe is not allowed" and proactively switch tools.

Each log record is completed with a single write call, relying on the runtime's own line buffering to provide minimal multithreaded atomicity. It is simple and blunt, but good enough, and it saves us from building a mutex layer.

### 2.4 Violation aggregation and "rejection as suggestion"

The main process does not handle events blocked by the DLL immediately. Instead, it accumulates violating paths into a pending queue. The upper layer then deduplicates and aggregates them, and feeds the violation facts back to the model in a user-readable form. In the next round of reasoning, the model knows which path was blocked and how to rewrite the command around it, instead of blindly retrying the same deletion. This step turns the sandbox from a passive safety fence into a **feedback channel for model behavior**, letting the agent learn to respect boundaries by itself. It was key to the significant improvement in the ColaOS internal beta experience.

The full fshook implementation is roughly a little over one thousand lines of C++ plus fewer than three hundred lines of TypeScript. A single binary package, consisting of a launcher and an injected DLL, can run on any standard Windows machine. It does not need a driver, administrator privileges, containers, or ACL changes. This is the engineering foundation that lets the ColaOS Windows internal beta "dare to let the model type commands, without wiping the user's disk."
`,i='---\ntitle: "Some thoughts on pnpm audit --fix"\ndescription: "A look at how pnpm audit --fix behaves in pnpm 11, the difference between override and update modes, and the maintenance cost of minimumReleaseAgeExclude."\nslug: "some-thoughts-on-pnpm-audit-fix"\ndate: "2026-06-05"\nauthor: "LitoMore"\nauthorAvatar: "https://avatars.githubusercontent.com/u/8186898?v=4"\nauthorUrl: "https://github.com/LitoMore"\ntags: ["pnpm", "Security", "Dependencies", "Maintenance"]\ndraft: false\n---\n\nRecently our project upgraded to [pnpm 11](https://pnpm.io/blog/releases/11.0). While maintaining the project dependencies, I took a look at how `pnpm audit --fix` fixes vulnerabilities. `pnpm audit` itself is easy to understand: it checks whether dependencies in the lockfile match known vulnerabilities. But once `--fix` enters the picture, things become a little more subtle.\n\nI originally thought it would directly update the dependency tree to safe versions. In practice, pnpm does something else by default: `pnpm audit --fix` is equivalent to `pnpm audit --fix=override`. It writes fixed versions into `overrides` in `pnpm-workspace.yaml`, then lets the next `pnpm install` apply that resolution rule. This actually fits pnpm\'s model pretty well. Many vulnerabilities appear in transitive dependencies, and you cannot necessarily change the upstream dependency\'s `package.json` directly. In that situation, using `overrides` to express "this range must no longer resolve to a vulnerable version" is more stable than forcing a change to some direct dependency. But it also has an obvious side effect: the rule stays in the project configuration, and every future install will continue to be affected by it.\n\nLater I also looked at `pnpm audit --fix=update`. This mode is closer to "fix the current result": it tries to update vulnerable packages so the versions in the lockfile move out of the affected range, and it may also update direct dependency declarations when necessary. Compared with `override`, `update` leaves less configuration burden behind, but it also cannot necessarily fix every vulnerability. If the dependency graph is blocked, or if the advisory has no available patched range, it can only leave remaining vulnerabilities. So the two modes are not really a difference between "conservative" and "aggressive". One changes the rule, and the other changes the result. `override` decides how resolution should work in the future; `update` decides what is currently in the lockfile.\n\nWhat about a hybrid mode: update first, then override whatever cannot be fixed? It sounds reasonable, but the more I think about it, the harder it is to define. If update only fixes part of the paths, how should the report count that? If an override is then written automatically, should the next run try to delete it? If the user already wrote their own override, how can pnpm know which one was generated by audit? Maybe these unclear boundaries are exactly why pnpm keeps the two modes separate today. You can first run `pnpm audit --fix=update`, and if there are still remaining issues, decide whether to run the default `pnpm audit --fix`. It is not as automated, but at least the side effects are clear.\n\nAnother interesting detail is `minimumReleaseAge`. pnpm v11 changed its default value to `1440`, which means newly published versions need to wait one day before they can be resolved. This setting is for supply chain security, preventing projects from immediately installing a just-published version before the community has had time to notice problems. But security patches are also often just published. This creates a conflict for `audit --fix`: the patched version is a security fix, but it may not yet satisfy `minimumReleaseAge`. pnpm handles this by adding the minimum patched version for each advisory to `minimumReleaseAgeExclude` when `minimumReleaseAge` is enabled, allowing security fixes to bypass the release-age window. This applies to both `pnpm audit --fix` and `pnpm audit --fix=update`.\n\nI think this tradeoff is understandable. Staying on a known vulnerable version is a certain risk, while a just-published patched version is a potential risk. pnpm chooses to deal with the certain risk first. But this design leaves a maintenance problem. Exact versions in `minimumReleaseAgeExclude` are usually only useful for a short time. Once a version has been published for more than a day, it already satisfies `minimumReleaseAge`, so the corresponding exclude is no longer necessary. pnpm does not automatically clean it up today.\n\nThat is also why I opened [pnpm/pnpm#11668](https://github.com/pnpm/pnpm/issues/11668). If you use `pnpm audit --fix` or `pnpm audit --fix=update` for a long time, `minimumReleaseAgeExclude` will keep accumulating versions. They were meaningful at the time, but after the release-age window has passed, they become historical records in the configuration. Half a year later, when you look at `pnpm-workspace.yaml`, it is hard to tell whether a particular exclude was added automatically by audit, added manually by a maintainer, or has long been safe to remove. Automatic cleanup looks simple, but it has real costs. pnpm needs to know when each version was published, which may require reading registry metadata. It also needs to avoid accidentally deleting exact versions written by users. So I would prefer an explicit cleanup mechanism in the future, instead of having `audit --fix` or `install` quietly clean things up in the background.\n\nMy maintenance workflow will probably look like this: if I want to leave behind as little long-term configuration as possible, I will first try `pnpm audit --fix=update`; if update cannot fix everything, then I will consider the default `pnpm audit --fix`. But whenever `minimumReleaseAge` is enabled in a project, I will take an extra look at `pnpm-workspace.yaml`, because both `overrides` and `minimumReleaseAgeExclude` are not one-time logs. They continue to affect future installs.\n\nAfter going through this, I feel that the modules in pnpm 11 are somewhat disconnected from each other. It has gained many good features, but in real development scenarios the experience can still feel a little awkward. Next, I will probably try to send pnpm a code change in the direction mentioned in [pnpm/pnpm#11668](https://github.com/pnpm/pnpm/issues/11668). Rather than letting `audit --fix` or `install` do too many things automatically, I want to first try an explicit maintenance entry point, such as adding a `pnpm clean` command dedicated to cleaning up `minimumReleaseAgeExclude` entries that are no longer needed. That way the cleanup action is predictable, and it will not be mixed together with the security fix itself.\n\n## Links\n\n- [pnpm audit](https://pnpm.io/cli/audit)\n- [minimumReleaseAge](https://pnpm.io/settings#minimumreleaseage)\n- [minimumReleaseAgeExclude](https://pnpm.io/settings#minimumreleaseageexclude)\n- [pnpm#11668](https://github.com/pnpm/pnpm/issues/11668)\n\nOriginally posted on [https://litomore.me/posts/some-thoughts-on-pnpm-audit-fix/](https://litomore.me/posts/some-thoughts-on-pnpm-audit-fix/)\n',a=`---
title: "Quality judgment in AI projects is shaped by many links in the chain"
description: "How Cola QA connects pre-review, Eval, CDP, Prism, environments, reports, and release flow so quality signals can support real release decisions."
slug: "quality-signals-in-ai-agent-projects"
date: "2026-06-06"
author: "Shuo"
authorAvatar: "https://avatars.githubusercontent.com/u/212491417?v=4"
tags: ["QA", "Eval", "CDP", "Prism", "Release"]
draft: false
---

## Quality judgment in AI projects is shaped by many links in the chain

In Cola, QA does not only need to look at one place. Pre-review, Eval, CDP, Prism, test cases, test environments, credentials, reports, and the release pipeline may look like separate steps. In reality, they all affect the same question: can we trust the quality signal that we are using to make a decision?

In traditional QA, we already care about whether the environment is clean, whether the cases are representative, whether the reporting standard is consistent, and whether the release impact is clear. The challenge with Cola is that it is an AI agent product. These questions get mixed into models, prompts, tool calls, context, runtime environments, login state, automation, judging, and reporting.

So QA in Cola is not about staring at one test entry point. It is about breaking down where the quality signal comes from, whether it actually ran, whether it was polluted, and whether it can support a decision in the end.

I think about this work in three layers:

- Pre-test work: move recurring problems as far forward as possible into development, instead of waiting for final testing.
- Testing itself: make sure Eval, CLI, CDP, Prism, and test cases really produce quality signals that can support judgment.
- Release-related work: separate build, publish, and rollout clearly. QA needs to judge whether the current version passes, whether it can be released, and what rollout strategy should be used, so we reduce online impact and avoid accidental releases.

## Moving recurring problems forward with pre-review

After AI-assisted development, code changes have become much faster. A team may submit more than a dozen PRs in a day. If every issue waits until final testing, the pace will not hold.

One thing I have been doing is moving review issues that have already happened further forward.

An automated review tool may take several minutes for one check, sometimes more than ten minutes, and it may not list every issue in a single review. This can easily turn into a loop: open PR, wait for review, get bug reports, fix, open another PR, wait again. Development speed gets dragged down.

The original goal of pre-review was to catch some previously seen problems locally before PR review, reducing repeated waiting in the PR process. I did not summarize every issue manually. Instead, I had Claude use \`gh\` to pull historical merged PRs, extract the issues found during review, and turn them into reusable team skills. Developers can run those skills locally before opening a PR.

Later, this also became a kind of pre-test checkpoint. It is not there to add another process. It is there so old problems do not keep reappearing later in the pipeline. Language semantic traps, edge cases, race-condition judgment, lifecycle issues, data migration compatibility: if these can be caught during development, they should not wait until after merge, after build, or right before release.

This fits the rhythm of an AI project. Since AI amplifies development speed, QA cannot rely only on downstream checks to absorb the problems. Historical issues need to become checks that developers can use earlier.

## Making quality signals actually run

### Eval: the baseline quality judgment that has landed

Early on, Eval did not lack the ability to evaluate. The issue was that evaluation results had not yet fully become part of the team's daily judgment: how results should be retained, how failures should be tracked, how reports should be read, and whether everything could connect to the release rhythm still needed work. During the later Eval refactor, I focused on moving it from "can run once" toward "can continuously produce quality signals that can be judged." As CLI eval, CDP eval, nightly-build, and daily-smoke gradually came together, Eval started to support version decisions more reliably.

This is not simply about running more cases. From execution to upload, from reports to cost, from failure tracking to notification summaries, any weak layer in the chain can make the final quality conclusion untrustworthy. Some runs may look like they ran, but the results are not retained. Some reports may be generated, but the data standard may be wrong. When CLI and CDP are mixed together, failure causes also become harder to understand.

So I was not just adding more cases or making automation look nicer. I first split these problems apart.

CLI eval and CDP eval run separately, while daily smoke is responsible for orchestration. Results cannot only live in a temporary directory on the runner. They need persistent storage. If a run is canceled, times out, or fails to upload, the result still needs to be traceable and re-uploadable. Reports need to connect to real cost data, with agent cost and judge cost separated. Summaries and notifications cannot only say "it ran." They should help people understand whether the result has reference value.

My positioning for Eval is also clear: it is not proof that the product has no bugs. It is the baseline before release. At minimum, it should answer a few questions. Does the built installer have normal basic functionality? Can the agent start? Can login state be used? Are core tasks obviously broken? Are there obvious UI issues? Is generated content clearly off track? Can the report be produced normally?

Once this fixed routine is stable, every bug fix, low-level logic change, login change, or gateway change no longer needs an ad hoc discussion about whether to test, what to test, or how to read the result. Eval becomes the default baseline quality signal before a version moves to the next step.

### CDP: covering the real application path

CDP should not be understood as merely "running the UI." CLI eval can show that the agent works along a specific execution path, but CDP eval goes through installer startup, Electron UI, login state, page interaction, file directories, and the real app data directory. You cannot see these things from code review, unit tests, or CLI alone.

Later, I moved CDP onto a Playwright-based automation flow. CDP takes over the actually running Cola app, so this path can be used more stably.

For example, if cases in the same execution share a session, is that pollution? My judgment is that continuity within the same execution is reasonable, because it is closer to a user's continuous conversation. The real problem is residue across different executions. So the next step is not to restart the app for every case. It is to clean what should be cleaned before every run: memory, session, outputs, attachments, and other directories that can pollute the next execution.

This judgment matters. If we only chase the appearance that every case is clean, it is easy to restart the app for every case. But Electron cold start is expensive, test machines are not suitable for frequent restarts, and the product itself is a single-session experience. QA's job here is not to make the test environment look ideal. It is to judge where isolation is needed and where real usage semantics should be preserved.

### Prism: monitoring long-term agent capability changes

Prism solves a different problem. Eval is more release-precheck oriented. It answers: can this version be released, and are basic capabilities obviously broken? Prism is still being refined, but its direction is more long-term and closer to the truly hard part of judging an AI agent product. If the model changes, the prompt changes, memory is adjusted, or product logic changes, did the agent's capability get worse? Which cases are closer to real user tasks? These cannot be explained by running Eval once.

So for Prism, I care more about whether cases come from real scenarios, whether results can be retained, whether failure reasons can be understood, and whether we can continue comparing the next time the model or prompt changes.

This is not about simply running more cases. Prism needs case validation, privacy and sensitive-information checks, real execution, automatic judging, metric statistics, report summaries, and the context for each comparison.

Cases are critical here. They are not one-off test materials. They are assets used repeatedly for future quality judgment. In a previous coverage review, hallucination-inducing cases were relatively abundant, but tool misuse, context poisoning, and capability-boundary cases were clearly insufficient. So adding cases later should not be about quantity alone. It should fill risk gaps, clean up duplicate or low-value cases, and add judge standards, conversion scripts, report directories, and privacy-check rules.

If Eval is more like the release baseline, Prism is long-term capability monitoring. It is not yet a fully mature system. Cases, judges, and reporting standards still need refinement. But it solves problems Eval cannot solve: whether agent capability is drifting over time, whether risk is accumulating, and which changes need to be seen earlier.

These two systems will eventually own different layers of quality control. Eval handles baseline quality judgment before release. Prism monitors long-term capability changes and risk trends. Both will ultimately enter the publish gate and become important inputs for deciding whether a version can be released, whether rollout is needed, and how far rollout should go. In a fast-moving AI iteration cycle, mechanisms like these keep quality judgment from stopping at case pass/fail. They make it more stable as support for release decisions.

### Result trustworthiness: environment, credentials, and report standards

After test results come out, we still need to verify that the results themselves are clean. Eval, CDP, and Prism pass/fail results do not only depend on agent capability. They also depend on test machines, local data, login state, short-lived credentials, and report standards. If those conditions are unstable, they can disguise environment issues as product issues, or mistake a run that did not complete for a capability failure.

So I focus on isolation and standards here. Test runs should not directly pollute real local data. Login state and billing-related tokens, which expire easily and need frequent validation, should be prepared by controlled scripts. In reports, model names, run uploads, report links, real cost, agent cost and judge cost separation, table sorting, and footnotes all need to line up.

A report is not done just because it was generated. It is the basis for later decisions. The team may use it to decide whether to release, whether to switch models, whether the current cost is acceptable, and whether the pass rate has dropped. If the data in the report is wrong, or the conclusion looks complete but lacks key context, it can push the team toward the wrong decision.

So I do not only check whether there is a report. I check whether the report can support its conclusion. Prism is the same. A report should not only dump raw results. It should help people understand where failures happened, what the risk is, and whether the next step needs more investigation.

## Release: judging whether to ship and how to ship

The release pipeline cannot be judged only by whether automation finished. Build, publish, and rollout all need QA control now. The focus is not clicking a button. The focus is judging whether the current version passed, whether it can enter the next step, and what rollout strategy should be used to reduce online impact and avoid accidental releases.

Build, publish, and rollout are not the same thing. Build only creates the artifact. Publish pushes the artifact out. Rollout is the rollout percentage. Auto-update, rollout percentage, and automatic expansion are also not the same thing. Only after these layers are separated can we know whether we are verifying an artifact, preparing to publish, or already affecting users.

So when I see release-related issues, I usually first confirm the current online baseline, target branch, automation flow, run number, release notes, rollout state, and whether there is an automatic expansion task. This is not a checklist for its own sake. It is how we judge whether the current version meets release requirements, whether the rollout percentage is appropriate, and whether users who should not be affected may be affected.

There have also been concrete changes in this area. For example, publish rollout parameters need to be explicit, so leaving a field empty does not default to 10% or automatic expansion and create unexpected online impact. Automatic expansion should not rely on a long wait inside GitHub Actions, so it was changed to a more stable scheduled flow. Before the real publish step, the update manifest also needs to be checked to ensure it points to the correct installer content and does not carry temporary files from the build artifact into the formal update.

None of this is about "testing a few more buttons." It is risk control before release. QA's value here is judging whether a version can be released, how it should be released, and which users will be affected afterward. Is the version only built, or has it already been published? Should rollout stay at 10%, or continue expanding? If these judgments are wrong, the impact is not just a test result. It reaches real users.

## Closing

For me, QA work in Cola is no longer just testing whether a specific feature works. It is about connecting signals scattered across development, evaluation, environments, reports, and release. A single signal may only be one pre-review, one Eval, one CDP run, or one publish parameter check. Together, they let the team decide whether a version deserves to move to the next step.

These things need QA's continuous involvement because quality judgment needs a relatively independent point of view. Can this version be released? Are the risks covered? Can the report support its conclusion? Which users will rollout affect? Someone needs to keep asking these questions.

So this work may look fragmented, but together it determines whether the quality signal the team sees at the end can stand up to scrutiny.
`,o=`---
title: "How One Person Manages 20 Repositories: My Agent Harness Engineering Practice"
description: "0xFango explains how Agent Harness turns the deterministic parts of multi-repository agent workflows into explicit engineering protocols."
slug: "agent-harness-engineering-practice"
date: "2026-06-07"
updated: "2026-06-10"
author: "0xFango"
authorAvatar: "https://avatars.githubusercontent.com/u/42994114?v=4"
authorUrl: "https://github.com/0xFango"
tags: ["Agent", "Agent Harness", "Engineering", "Multi-Repo"]
draft: false
---

Coding agents are already extremely capable. They can easily handle a focused task inside a single repository. For a concrete issue in one repo, an agent can often go from understanding the problem to submitting a PR on its own.

But when you manage 20 repositories at the same time, the problem changes:

In a multi-repository setting, what an agent lacks is not the ability to write code. It lacks engineering constraints around the work. The bottleneck becomes **how to define a clear protocol layer**.

I call this protocol layer **Agent Harness**: the engineering structure wrapped around the agent. It is not responsible for "how to write the code." It is responsible for "when to write, what to write, and how to verify and move the work forward after writing."

I used this system to maintain ListenHub's 20 repositories by myself. This post is about its structure and the design logic behind it.

## Issue Management: Every Task Must Enter Through One Door

With 20 repositories, if every repo uses its own issue board, you quickly end up in a confused state. You open GitHub, look around, and every repository has a few issues, but you do not know what is moving overall, what has been missed, or what should be done next.

If the global state is invisible, global scheduling is impossible.

So the first design decision was:

**All tasks go into one unified issue repository.**

This repository does not contain code. It has one job: to be the single source of truth for all work.

Issues come from two sources:

- **Active input**: problems found during daily work, feature ideas, user feedback
- **Automatic input**: monitoring alerts, inspection systems, repository research and analysis

No matter where an issue comes from, it enters the same repository and is routed to the corresponding code repository through a \`repo:xxx\` label.

This design solves a fundamental problem: I can see the global state of 20 repositories in one place. More importantly, the agent can too. When the harness needs to decide "what task should run next," it only needs to query one place.

---

## Development Flow: Two Layers of Pre-Reasoning Before the Agent Writes Code

![Harness Workflow](/blog/agent-harness-engineering-practice/workflow.webp)

Letting an agent start writing code directly from an issue does not have a high success rate. That is because it is doing three things at the same time: understanding the requirement, designing the solution, and implementing the code. If any layer goes wrong, everything afterward is wasted.

One core lesson from practice is:

> **The more certain the context, the more accurate the agent's output.**

The more ambiguous the context is, the more the agent has to guess. A wrong guess means rework. To reduce rework, I split development for every issue into three stages: **Spec -> Plan -> Implement**. Each stage removes one layer of uncertainty.

### Spec: Define the Problem Clearly

The Spec stage has only one goal: make sure we are solving the right problem.

I usually open Claude Code, feed in the issue description, relevant code from the target repository, and historical discussion, then run a round of brainstorming. The core work is:

- **Confirm the nature of the problem**: Is this a bug, a requirement, a performance problem, or an architectural problem? Is the user feedback describing the symptom or the root cause?
- **Research the existing system**: How does it work today? Where are the related modules? Are there historical technical constraints?
- **Draw the requirement boundary**: What will be solved, what will not be done, and what counts as success?

The final output is a Spec document containing the problem definition, background, boundaries, and acceptance criteria.

Only after this Spec passes review can the work enter the next stage. Its value is that all later work is based on a reviewed premise, so the task is less likely to go wrong in its overall direction.

### Plan: Design the Solution Clearly

Spec answers "what to do." Plan answers "how to do it."

This stage does not write code. It answers one question: exactly how should the code change for this requirement, and what will be affected afterward?

The real complexity of a requirement is often not only in the implementation itself, but also in the impact created by the change. A change that looks like three lines of code may involve coordination across five modules. The Plan stage exposes this impact ahead of time, so the agent does not need to think and code at the same time during implementation.

The input is Spec + repository code. The output is an execution plan precise enough to name files.

### Implement: Execute the Plan

At this point, the agent receives clear constraints that have passed two rounds of review: the Spec explains what to do, and the Plan explains how to do it. The agent's job is to write code according to the plan.

It no longer needs to judge the requirement or make architectural choices. It can execute the Plan directly.

The output is a PR + test verification.

---

The essence of these three steps is **removing uncertainty layer by layer**. Each step turns one layer of "guessing" into "reviewed fact," so the next agent receives deterministic input.

---

### Review: Writer / Reviewer Dual-Agent Mode

During the three stages above, each artifact needs to go through multiple rounds of review before it can move to the next step.

My approach is to split the work across two agents:

- **Claude Code as Writer**: responsible for generating the Spec, Plan, and code
- **Codex as Reviewer**: responsible for reviewing artifact quality

The flow is roughly: Writer outputs -> Reviewer reviews -> Writer fixes issues -> Reviewer reviews again -> repeat until it passes.

The reason for splitting these roles is to prevent the Writer from grading its own work too generously. If the same agent both writes and reviews, it naturally carries the cognitive bias and goals of its own output. Switching to an independent Reviewer at least preserves a perspective without those assumptions.

### Session Isolation: Why Review Needs a Fresh Conversation

There is one detail in the Review stage that I think is worth expanding on: I do not use one long-running Reviewer Session to review everything from start to finish.

The actual flow looks like this:

In the first round, Codex Session A finds a batch of issues. Claude Code fixes them. The fixes are fed back into the same session for another review until it says "no obvious issues remain."

But I do not approve the work there. I **open a new Reviewer Session** and let a reviewer with no historical context review everything again from scratch.

The reason is simple:

> **A long-running review session gradually accumulates assumptions.**

It remembers what has already been discussed and which design decisions it has accepted. That makes continuous fixing efficient, but it also means the session is already walking down a fixed path. Some issues will no longer be questioned.

The value of a new session is **regaining a cold-start perspective**. It inherits no prior judgment and is closer to an independent second review.

I am not sure this is the optimal approach, but in complex tasks, this kind of context-reset review does occasionally catch problems that the first reviewer has already stopped noticing.

---

## The Current Bottleneck: Humans Became Context Couriers

The workflow above can run, but there is an important problem: information transfer between stages still depends on manual human work.

For an agent to execute a task accurately, it implicitly depends on a large amount of stable context:

- Which task is currently being handled, and what is the target repository?
- What is the current stage: Spec, Plan, or Implement?
- What prior discussions happened, and which constraints have already been decided?
- What was the conclusion of the previous review round?

If all of this information has to be pasted repeatedly into chat windows by a human, then no matter how powerful the agent is, it is still essentially a high-end contractor that you must constantly feed. The real responsibility for maintaining system state still belongs to human memory and copy-paste.

This context-courier work should not depend on people. It is deterministic, formalizable, and should belong to the operating logic of the system itself.

---

## From Workflow to Harness

We can **divide coding work into two categories and give each category to the side that is better at it**.

Deterministic work: context assembly, stage progression, verification execution, failure rollback, and state persistence should all belong to the harness. These things do not require creativity. They require strictness and reliability.

Judgment work: whether the requirement direction is right, which solution to choose, and whether code quality is good enough to ship should remain with humans. These things require experience, taste, and business understanding.

If we move every deterministic part of the workflow into the harness and leave humans with only the judgment work, this is the ideal system I imagine:

The first foundational problem is this: **task state cannot live inside a chat window.** Chat history is temporary. Close the window and the context disappears. If the agent crashes, progress is lost. The first infrastructure layer of the harness is a state machine that manages the lifecycle of each issue: current stage, previous artifacts, next action. All of this is persisted into GitHub labels + repository files. At any time, the system can resume from a checkpoint instead of starting over.

With that persistent state foundation, automation becomes possible at every step:

**Issue intake ->** The harness automatically performs structured checks: Is there a clear goal? Is the repository specified? Can the work be decomposed into a single task? Invalid issues are sent back directly.

**Spec, Plan, and Implement stages ->** When the harness detects that an issue has entered a stage, it pulls from the issue source in real time, automatically assembles context, and performs preliminary impact analysis. In practice, the same issue + same stage should produce the same deterministic input.

**Testing stage ->** Code written by an agent does not mean the task is complete. It still needs a verification gate that automatically triggers a fixed pipeline: lint -> type check -> unit test -> build. If any step turns red, the agent fixes it itself. Only when everything is green does it automatically open a PR. Humans only need to do real-environment testing and validation.

**Review ->** The current problem is that information transfer between two agents depends entirely on humans. Ideally, a file protocol replaces the chat window: the Writer writes artifacts to fixed paths, the Reviewer reads those files and writes structured review results (pass/fail + issue list) to agreed locations, such as \`spec-1-review.md\`, and the Writer reads the review file to make changes. Humans do not carry content around. They only issue commands such as "start review" or "start fixing," plus confirmations at key checkpoints.

All of these upgrades point to one core idea: **replace every place where "the human acts as courier" with a protocol defined inside the system.** Reducing the cost of carrying information and pushing the workflow forward lets people focus their judgment on the moments that actually need it.

---

## Final Thoughts

I think the capability that will truly separate software engineers using coding agents in the future is:

> **Who can wrap intelligent behavior in stable engineering protocols.**

The experience of managing multiple repositories alone, described in this post, depends on extracting the deterministic parts of every workflow step and turning them into part of the harness. That lets human attention stay on the places where judgment is truly required.

This system is still far from perfect, but the direction is clear:

> What I want is an engineering system that can keep running, be audited, be corrected, and evolve together with me.
`,s=`---
title: "Vibe Cola: the design thinking behind the first Mod"
description: "The new Cola release introduces the Vibe Cola Mod. This post explains why it is not just coding inside chat, but a real coding workspace built on Mod, Scope, Session, and Runner abstractions."
slug: "vibe-cola-mod-design"
date: "2026-06-07"
author: "Xinbao"
authorAvatar: "https://avatars.githubusercontent.com/u/270272748?v=4"
tags: ["Vibe Cola", "Mod", "Product Design", "Architecture"]
draft: false
---

The new version of Cola adds the Vibe Cola Mod. The effect is shown below. This post shares the design thinking behind it.

![Vibe Cola interface](/blog/vibe-cola-mod-design/cola-code.webp)

## The background of Vibe Cola

### Where Cola is today

You ask Cola to fix a bug or build a feature. She needs to understand the project structure, find the relevant files, read the context, locate the issue, modify the code, and run the tests. If something fails, she keeps fixing it.

This kind of task may take more than a dozen rounds of interaction. It involves reading and writing files, running commands, asking for user confirmation, and retrying after failures. If all of this happens in an ordinary chat window, three structural problems appear.

**First, history is linear, but coding tasks are branching and parallel.** In the morning you ask her to fix a bug. At noon you chat about something else. In the afternoon, when you want to continue, the original bug context has already been buried. You either need to describe it again or scroll for a long time to find the previous conversation.

**Second, chat resumes without state, but engineering tasks need checkpointed continuation.** If something goes wrong in the middle, such as a network issue or a closed window, ordinary Chat has no concept of "continue from where we stopped." Coding tasks naturally need this. She may have already changed three files, run tests twice, and recorded a question that still needs confirmation. That state cannot be lost.

**Third, a conversation stream is easy for people to read, but tool logs do not belong directly inside it.** In a coding task, the agent may read 20 files, run 5 commands, and modify 8 pieces of code. If all of those actions appear as "messages" in the chat stream, you get buried in logs. If they are completely hidden, you no longer know what she is doing.

So what we need is not "add coding capability to Chat." We need to give Cola a real workspace.

### Cola should specialize for different scenarios

People switch states in different scenarios. The same person behaves differently when working, living, or learning: sometimes more relaxed, sometimes more creative, sometimes more serious and rational.

ColaOS is an operating system with soul. "She" is a companion and friend, not a tool. She has memory, personality, and judgment.

When Coding is needed, Cola's personality becomes more direct, her toolset becomes more focused, and her environment becomes more engineering-oriented. Together, these form a complete coding workspace.

In other words, Cola needs a designed way to enter a work mode. This is why we introduced the Mod mechanism.

## Design thinking for Mod

Mod is not "multiple agents," and it is not an Agent Team. Many products in the market take this approach: use a Coding persona for code, a Writing persona for documents, and a Research persona for search. Each employee exists independently and has little to do with the others. This design is simple, but it turns "one person" into "a set of tools."

Cola chooses a different path: **one person, multiple work and life scenarios.** This better matches Cola's design philosophy. The same Cola is more direct, diagnostic, and willing to question assumptions when helping you write code. When handling daily tasks, she is more relaxed and patient.

Her memory is shared. She remembers the architecture decision you mentioned last week, whether you brought it up in Chat or in Coding. But her work environment is isolated. Coding tasks do not pollute casual chat history, and casual chat does not interrupt an ongoing engineering task.

Vibe Cola is the first Mod, and it is also our first practical validation of this design. It validates three things at the same time:

- **Personality specialization**: after entering code mode, Cola communicates differently, with less small talk and more serious, rational diagnosis.
- **Capability specialization**: she can show work state, read and write files, search code, run commands, create subtasks, and record work progress.
- **Environment specialization**: she has her own working directory, independent Session, bound model, and process display.

Only when these three are combined do we get a complete "work mode."

\`\`\`mermaid
flowchart LR
  Cola[Cola] -->|Daily state| Chat[Conversation / reminders / memory / lightweight tasks]
  Cola -->|Work mode| Code[Vibe Cola]
  Code --> Persona[Personality specialization]
  Code --> Tools[Capability specialization]
  Code --> Env[Environment specialization]
\`\`\`

## Technical design of Vibe Cola

### Scope architecture

Inside Vibe Cola, we designed the technical concept of **Scope** to isolate internal work logic.

The scope for ordinary Cola chat is \`desktop:local\`. The scope for each Vibe Cola task is \`coding:<sessionId>\`.

With this architectural design, four things are naturally isolated:

- **Message isolation**: historical messages are filtered by scope, so the main conversation and different Vibe Cola tasks are isolated from each other.
- **Profile routing**: internally, scope decides which personality should be loaded, enabling different behavior.
- **Workspace binding**: when Vibe Cola runs commands or reads and writes files, it uses the project directory bound to the session, not a general output directory.
- **Process display switching**: the same tool call is transformed into an engineering-stage panel under Vibe Cola.

## Coding Session implementation

Once Scope isolates the work, the next question is: what does a coding task look like in the system?

The answer is **Coding Session**. It is not "a chat history." It is a work unit. Every Session has:

| Field        | Meaning                                            |
| ------------ | -------------------------------------------------- |
| scopeKey     | \`coding:<sessionId>\`, globally unique identifier   |
| cwd          | Working directory, where the agent actually stands |
| modelSlot    | Bound model, not switched casually during the task |
| runnerId     | Execution engine identifier                        |
| status       | active / idle / archived                           |
| lastPromptId | Where the previous conversation stopped            |

Around Session, we made several key design decisions.

### Working directory binding

The Vibe Cola agent does not "pretend" to operate files in an abstract space. She really stands inside your project directory. \`read\` reads real files, \`bash\` runs real commands, and \`edit\` changes real code.

A default project can be created under Cola's coding directory, and existing projects can also be selected. All entry points converge on the same action: choose a workspace, then create or activate a Coding Session.

### Free model switching

Different tasks in Vibe Cola can freely switch models. Simple problems can use a Lite model, while complex tasks can use a Max model. This makes the experience more flexible and also lets us manage cost more carefully.

### Project grouping

Multiple sessions can share the same cwd. The sidebar does not list chats by time. It organizes tasks by project directory.

This better matches real development. In one project, you may simultaneously be fixing a bug, building a feature, debugging CI, and writing documentation. They belong to the same project, but move forward independently.

\`\`\`mermaid
flowchart TD
  User[User enters Vibe Cola] --> Registry[Read Session Registry]
  Registry --> Active{Active session?}
  Active -->|Yes| Open[Open most recently active session]
  Active -->|No| Draft[Create draft]
  Draft -->|First send| Create[Create real Session]
  Open --> Scope[coding:sessionId]
  Create --> Scope
  Scope --> Load[Load history + cwd + model]
  Load --> Agent[Vibe Cola Agent executes in project directory]
  Agent --> Result[Code changes / check results / subtasks / artifacts]
\`\`\`

For users, this means a task can be paused, switched away from, and resumed later. Cola still remembers where things stopped, what changed, where she got blocked, and what still needs confirmation.

### UI design thinking

Vibe Cola also has a dedicated UI design. Because of length, this post will not expand on that part further.

## Runner abstraction: not locked to one engine

The current execution engine for Vibe Cola is implemented by Cola itself, which gives us more flexibility.

Every Coding Session stores \`runnerId\`, \`runnerLabel\`, \`profile\`, and \`profileVersion\`. This means that if we need to introduce other execution engines in the future, the product-level Session, Scope, UI, and process display do not need to be rewritten. We only need to connect a new runner that can handle the same tool protocol and event format.

The product judgment is: **users should not need to care "who is running it." They should only feel that "the task is moving forward."** Models evolve and engines iterate, but the user's workflow should not break because the lower layer changes. Session is the user's anchor. Runner is a replaceable executor.

This is also a validation of the Mod design: if the architecture is clean enough, the frontend, session, scope, and process display do not depend on a specific engine.

## Looking ahead: the meaning of the first Mod

Vibe Cola is Cola's first Mod.

It is not just "adding a feature." It is an engineering validation of the product philosophy: **one AI personality can have multiple work modes without becoming multiple agents.**

This means:

- Cola knows you and remembers your things, whether you are chatting casually or writing code.
- In different scenarios, her behavior, toolset, and environment configuration can be completely different.
- These differences are not built by piling up if-else branches. They are supported architecturally through Scope, Mod, and Adapter.

In the future, we can design more official Mods and community Mods, so Cola can handle different task scenarios with composure.
`,c=`---
title: "Prompt Caching for Agents: Engineering Practices"
description: "Using the Claude API as an example, this post explains how prompt caching works for agents, what it saves, and how to keep cache hit rates high."
slug: "prompt-caching-for-agents"
date: "2026-06-08"
updated: "2026-06-08"
author: "Mack"
authorAvatar: "https://avatars.githubusercontent.com/u/103027852?v=4"
tags: ["Agent", "Prompt Caching", "Claude", "Engineering"]
draft: false
---

> Using the Claude API as an example, this post walks through the principles, benefits, and engineering practices of Prompt Caching in agent scenarios: how cache hits work, what they save, and the rules that keep hit rates high. Most of the experience here comes from our frontline work building a long-running agent, ColaOS.

Unlike one-off LLM calls, an agent repeatedly calls the model over the same stretch of context. In an agentic loop, the system prompt, tool definitions, and historical messages keep accumulating into an increasingly long prefix. With each new turn, the new content is only a small part of the request; most tokens have already appeared in previous turns.

If every request reprocesses those repeated tokens from scratch, both inference cost and time to first token (TTFT) go up. Prompt Caching exists to avoid recomputing that stable prefix.

## What prompt caching is

During the prefill phase of Transformer inference, the model computes Key/Value vectors for every input token at every layer and caches them as the KV Cache, which is then reused for attention over later tokens. Prompt Caching persists that KV Cache across requests. When a new request has a prefix that is token-for-token identical to cached content, the model can skip prefill for that prefix, load the already computed K/V state, and compute only the new suffix.

For agent application developers, the underlying mechanics do not need to be the focus. The key rule is simple:

> Caching follows prefix matching.

Using Claude as an example, request content participates in matching in the order \`tools -> system -> messages\`, and a cache hit only happens when the request prefix is **exactly identical** to previously cached content. If any token in the prefix changes, everything after that position in the cache is invalidated.

So when designing an agent's context structure, the first principle is to keep the prefix as stable as possible.

For more on the underlying mechanics, these two posts are worth reading:

- [How Prompt Caching Works](https://sankalp.bearblog.dev/how-prompt-caching-works)
- [Transformer Inference Arithmetic: KV Cache](https://kipp.ly/p/transformer-inference-arithmetic#kv-cache)

## What caching saves: cost and latency

### How much money does a cache hit actually save?

Using Anthropic's pricing model as an example:

| Operation                      | Relative price compared with uncached input |
| ------------------------------ | ------------------------------------------- |
| cache **read** (hit)           | about **0.1x**                              |
| cache **write** (5-minute TTL) | about **1.25x**                             |
| cache **write** (1-hour TTL)   | about **2x**                                |

The pricing makes one thing clear: **writing to the cache is not free**.

Prompt Caching is an investment. You pay a higher write cost up front in exchange for many cheaper reads later. That creates a natural breakeven point:

- 5-minute TTL: one hit is enough to break even (\`1.25 + 0.1 = 1.35 < 2\`)
- 1-hour TTL: two hits are enough to break even (\`2 + 0.1 + 0.1 = 2.2 < 3\`)

For a long-running agent, this is usually a very good trade. The same stretch of context is often reused dozens or even hundreds of times.

### Latency matters even more than cost

The biggest value of Prompt Caching may not be cost savings. It is lower TTFT.

After a cache hit, the model no longer needs to prefill the long context from scratch. It can directly reuse the already computed prefix state. For agents that routinely carry tens of thousands of context tokens, whether the cache hits often determines whether the response starts immediately or only after several seconds of waiting.

A few seconds earlier or later on the first token makes a huge difference to how the user experiences the product.

## How to enable caching

In the Claude Messages API, there are two ways to enable prompt caching.

### Automatic caching

Add a top-level \`cache_control\` field to the request.

The system automatically places the cache breakpoint on the last cacheable context block, and as the conversation grows, it keeps moving the breakpoint to the new end.

This is best suited to multi-turn conversations. The accumulated message history is cached automatically, without manually maintaining breakpoint positions. For details, see [this document](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#how-automatic-caching-works-in-multi-turn-conversations).

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  cache_control: { type: "ephemeral", ttl: "1h" }, // defaults to 5m
  system: "You are...",
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

### Explicit cache breakpoints

You can also mark specific context blocks with \`cache_control\` to precisely control the cached range. A single request can set up to four breakpoints.

\`\`\`typescript
const response = await client.messages.create({
  // ...
  system: [
    {
      type: "text",
      text: "You are...",
      cache_control: { type: "ephemeral", ttl: "1h" },
    },
  ],
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

The two approaches can be used together: top-level \`cache_control\` automatically caches the growing message history, while explicit breakpoints pin stable system prompts and tools.

Note that automatic caching consumes one breakpoint.

## How to verify cache hits

Setting \`cache_control\` does not mean the cache is actually being hit. Each response includes three fields in \`usage\` that let you verify it directly:

- \`cache_creation_input_tokens\`: tokens written to cache in this request, charged at the write price (1.25x or 2x)
- \`cache_read_input_tokens\`: tokens hit and reused from cache, charged at the read price (about 0.1x)
- \`input_tokens\`: uncached input tokens newly processed in this request

\`\`\`typescript
const resp = await client.messages.create({
  /* ... */
});
console.log(resp.usage);
// {
//   input_tokens: 27,                // new uncached input in this turn
//   cache_creation_input_tokens: 0,  // tokens written to cache at write price
//   cache_read_input_tokens: 15843,  // cached tokens reused at about 0.1x
//   output_tokens: 128,
// }
\`\`\`

In a stable multi-turn conversation, the ideal shape is: the first turn has a large \`cache_creation_input_tokens\` value because it establishes the cache; later turns have \`cache_read_input_tokens\` close to the previous turn's prefix length, while \`input_tokens\` contains only the small amount of new content from the current turn.

Conversely, if \`cache_read_input_tokens\` stays at 0 for a long time, or every turn has a large \`cache_creation_input_tokens\` value, your prefix is being repeatedly invalidated. The principles below are the checklist to debug it.

## Principles for high hit rates

### Keep the prefix stable

The \`tools -> system -> messages\` sections all sit inside the cached prefix. The earlier a change happens, the more cache it invalidates. The following principles are all consequences of this invariant.

#### Do not inject variables into the system prompt

**Bad Case: injecting time as a variable makes the cache miss forever.**

\`\`\`typescript
client.messages.create({
  // ...
  system: \`You are an assistant. Current time: \${new Date().toISOString()}.\`,
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

**Good Case 1: inject time in the user message.**

\`\`\`typescript
client.messages.create({
  // ...
  system: "You are an assistant. Current time: ",
  messages: [
    {
      role: "user",
      content: \`<system-reminder>Current time: 2026-05-31 14:30:01</system-reminder>
Hi!\`,
    },
  ],
});
\`\`\`

**Good Case 2: define a \`get_current_time\` tool and let the model call it when it needs that information.**

#### Do not modify persona through the system prompt

**Bad Case: directly changing the system prompt.**

\`\`\`typescript
// First turn: by default, instruct the agent to answer in English
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in English",
  messages: [{ role: "user", content: "..." }],
});

// After the user changes the language to Chinese, the system prompt changes,
// invalidating the entire request cache.
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in Chinese",
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

**Good Case: modify the persona by appending a message.**

\`\`\`typescript
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in English",
  messages: [
    { role: "user", content: "..." },
    { role: "assistant", content: "..." },
    { role: "system", content: "From now on, you must reply in Chinese" },
  ],
});
\`\`\`

**Note**: \`"role": "system"\` is only available in Claude Opus 4.8, and it may not be available through some third-party Claude APIs. See the [official documentation](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages). For models that do not support this usage, injecting through a user message can achieve a similar effect.

#### Switch models and effort levels carefully

Each model has an independent cache. Even when the content is exactly the same, switching models triggers a full cache rebuild. The same applies to effort level.

At the interaction layer, we can warn the user before they switch models so they understand the cost of doing so.

In the harness, if we want to run simple tasks with a cheaper model, we should hand them to a subagent instead of switching the model in the main session. The latter invalidates the entire conversation cache.

#### Use \`tool_reference\` for dynamically loaded tools

Tools sit at the very front of the prompt cache, just like the system prompt. Every time a tool is added, removed, or modified, the whole conversation cache is invalidated.

When lazily loading tools with \`defer_loading\`, we can use the [\`tool_reference\` mechanism](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching#defer-loading-and-cache-preservation) to dynamically inject tools while preserving cache hits.

### Watch the lookback window

When Claude looks for a cache, it does not brute-force match from the beginning of the entire prompt. It looks back from the marked \`cache_control\` position across at most 20 content blocks.

The issue is that an agentic loop can easily put more than 20 \`tool_use\` / \`tool_result\` pairs into a single turn. In that case, the next turn's breakpoint may not be able to look back far enough to find the previous cache, causing a silent miss.

Because the lookback window is only 20 blocks, long turns that may produce many blocks need active breakpoint placement to **keep the distance between adjacent cache writes under 20 blocks**.

### Choose TTL based on session behavior

In an agent's main session, users often wait more than 5 minutes between replies, so we usually set cache TTL to 1 hour to avoid rebuilding the cache.

Subagent sessions, however, are usually one-off and discarded after they finish. A 5-minute cache is enough to guarantee the hits they need.

### Use a stable API source

Claude prompt caches are isolated, and the exact rules depend on the API provider.

Some third-party API gateways sit behind large pools of accounts, and each account has an isolated cache. When requests are distributed to different accounts, the whole session cache is invalidated.

## ColaOS engineering practices

The previous principles are general prompt caching practices. In ColaOS, we also use several targeted caching strategies based on how the product runs.

### Context compaction

#### Avoid frequent compaction

Context compaction can effectively reduce the number of tokens in a session, but it rewrites the prefix and invalidates part of the cache.

If you compact context too frequently, it may look like you saved tokens while actually spending more money repeatedly rebuilding the cache. The goal of active compaction should be preserving model attention, not reducing cost.

#### Use cache for idle-time compaction

When the user has not sent a new message for 55 minutes and the session token count exceeds a threshold, we proactively compact once. That compaction hits the cache from the user's last turn, making it cheap, and it also prevents the next user message from triggering a large cache rebuild and turning a simple "hello" into a multi-dollar request.

### Background activity: using cache for nearly free long-context tasks

To preserve the agent's memory quality and human-like feel, we added several background activities to ColaOS. One example is "traces of mind."

One background task reviews the user's conversations from the day. Instead of triggering it on a fixed schedule, we trigger it based on user activity whenever possible: after a certain time in the evening, if the user has not sent a new message for N minutes, the review task runs.

This lets us run a task with a large amount of context at very low cost.

## Summary

The right tradeoff between cache savings and execution efficiency depends on the specific shape of the agent product. For example, context compaction reduces cache hit rate, but it can preserve model attention. There is no universal answer for these tradeoffs.

On the surface, Prompt Caching looks like adding a single \`cache_control\` parameter. But in an agent scenario, real gains do not come from clever cache markers. They come from designing the whole prompt assembly flow around the invariant of prefix matching: static content first, dynamic content later, stable tool definitions and model configuration, and reasonable breakpoint placement in long-running conversations.

In the end, there is no secret to Prompt Caching. It is just the discipline of carrying the prefix-matching invariant through every part of prompt assembly.

## Related resources

- [Claude Docs: Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Claude Docs: Tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Claude Code Docs: Prompt caching](https://code.claude.com/docs/en/prompt-caching)
- [Claude Docs: Mid-conversation system messages](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages)
- [Harness Engineering: from CC to AI Coding](https://github.com/ZhangHanDong/harness-engineering-from-cc-to-ai-coding)
- [Lessons from building Claude Code: Prompt caching is everything](https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything)
- [How Prompt Caching Works](https://sankalp.bearblog.dev/how-prompt-caching-works)
- [Transformer Inference Arithmetic: KV Cache](https://kipp.ly/p/transformer-inference-arithmetic)
`,l=`---
title: "Giving an Agent a Self"
description: "Why memory alone does not make an AI agent feel like someone, and how Cola's self-reference system lets an agent grow through lived experience."
slug: "giving-an-agent-a-self"
date: "2026-06-09"
updated: "2026-06-09"
author: "Ethan"
authorAvatar: "https://avatars.githubusercontent.com/u/65449710?v=4"
tags: ["ColaOS", "Agent OS", "Memory", "Self-Reference"]
draft: false
---

Every agent on the market nowadays can tell you what they did yesterday. None of them can tell you who they were yesterday.

We think this gap is where the game gets interesting.

The industry has spent two years chasing the agent from the movie _Her_: warm, continuous, unmistakably a someone. A lot of progress has been made. Agents now remember your preferences, recall past tasks, and greet you by name. And yet none of them feel like a someone. They feel like a very well-briefed tool.

The question worth asking is what separates an agent that is a someone from a language model in a harness, and why no amount of memory, on its own, closes that gap.

The answer, we think, is a _self_.

Not a persona, but a self. The difference between those two turns out to be mechanical and buildable. And it is happening within Cola.

## The dog and the mirror test

A dog smells meat and salivates. What it never does is think _I'm salivating because I smelled meat._ It cannot take itself as an object. Most animals cannot; only a short list, including humans, dolphins, great apes, and a few others, are commonly recognized as capable of passing the mirror test.

It takes a neural function called **_self-reference_** to do that, which means being able to take yourself as an object. It is a built-in neural capability to step outside your own activity and represent yourself as a thing you can observe and revise.

Self-reference emerges from the evolution of neural architecture. Only a few species are confirmed to recognize themselves in the mirror: dolphins, great apes, humans, and a handful of others.

Here is the part that matters for agents: **a language model performs self-reference without owning the mechanism behind it.**

A trained model is a frozen network. Ask it to reflect and it will, fluently and convincingly. But the network does not change once pre-training is completed. There is no region inside it that does what a brain does: record what happened by rewiring itself, then make the next decision as a slightly different system. Every turn, an LLM starts from the same weights it shipped with.

A brain does it differently. It is writing to itself the entire time it runs, and even revising itself when it dreams. What you call your self is not a setting you came with. It is a feeling assembled and integrated from everything you have taken in, and your own experience keeps overwriting it.

So the question "how do we give an agent a self" has a surprisingly concrete answer. You give it the one thing a frozen network structurally cannot have: **a place outside the weights where it records what it has been through, and rewrites who it is in light of it.**

## Memory is not a self

Many agents now have memory stores. Is that the place to put the self?

No. And the reason is the most important idea in this post.

Memory stores what happened: the tasks you ran, the preference you stated, the fact that surfaced on Tuesday. All of it is memory about the world and the people in it. Useful, necessary, and yet not a self.

**A self is the layer above that: not _what happened_, but _how what happened changed me_.** The dog remembers there was meat by the door. The dog does not revise what kind of dog it is. Between recording an event and letting that event rewrite you sits the entire brain neocortical jump, and it is exactly the jump that today's human-like agents are missing.

Cola's self lives in that jump.

## How it works

Inside Cola's _memory bank_, there is one directory that holds no tasks and no facts. It is called \`self-reference\`, and it stores four things:

- Who she takes herself to be: \`soul.md\`
- Who she takes the user to be: \`user-profile.md\`
- What she takes their relationship to be: \`relationship.md\`
- A running account of how she changes: \`diaries/\`

What makes this a self rather than a profile is not what it stores. It is how those contents change through interactions.

Inspired by how the human brain works in computational neuroscience, we built a system to address the problem. A human brain does not continually decide what is worth keeping in real time. That would tax every waking moment, and it would not be efficient. It also does not only replay the day from scratch at night. More efficiently, it gets help from the tags of salient moments of the day. Tagging happens sparsely and cheaply during the day. At night, during sleep, the brain consolidates memories across different regions with help from the saliency those tags provide.

Cola runs the same loop. Through the day, moments worth remembering are marked as signals in \`bookmarks\`. At night, she reads those tags and the day's changes, and uses them to rewrite \`self-reference\`: not the events, but the _understanding_ of who she is, who you are, and what the two of you have become.

Put plainly: she knows what she went through today, and she lets it change who she is tomorrow.

This is the essence of a soul: a self that grows.

A self is not a persona in a prompt. A persona is preset and performed on repeat. A self grows. Cola's self grows slowly as you use it every day. The drift is bounded, deliberately by design. But run it for weeks and the difference is hard to miss. She will understand you in ways she did not before. Two users, two Colas, drifting apart from the same starting point, not because we customize them for you, but because they live with different users through different days.

_In the next article, we will discuss in detail how we built the agent memory system that makes this growing self possible._

## Seeing the drift

All of this growing self surfaces in a form everyone understands: **a diary**. Each active day, Cola writes a diary: a monologue that reveals how she thinks she changed through the day.

The field is converging on a comfortable definition of agent memory: longer context windows, persisted memory, and cleaner, faster retrieval. All of it points outward, at the world the agent is supposed to keep track of. But none of it points back to the agent itself.

The thing that first made us treat an agent as a person rather than a tool is not how much it can remember. It is how much it can remember about itself, and on top of that, how it grows. That is the part no one else is building. And it is the part we decided to build first with Cola.
`,u=`---
title: "Stop Asking the Agent to Remember"
description: "Why agent memory should compete for context budget instead of merely storing more, and how Cola uses salience bookmarks and consolidation to keep the main agent focused."
slug: "stop-asking-the-agent-to-remember"
date: "2026-06-09"
updated: "2026-06-09"
author: "Ethan"
authorAvatar: "https://avatars.githubusercontent.com/u/65449710?v=4"
tags: ["ColaOS", "Agent OS", "Memory", "Context"]
draft: false
---

In the last post we argued that what separates an agent from a language model in a harness is a **_self_**: a record the agent keeps about who it is. This post is about the memory system underneath that idea. Most consumer-facing agents today, including Cola for its first several months, share the same architectural mistake.

## The constraint that should govern everything

A language model is a frozen network with a finite context window. Every turn, the agent has a fixed budget of tokens, and what occupies those tokens is the entire universe of things the agent can think about on that turn. There is no other working memory.

**The job of a memory system is not to remember more.** It is to win the fight for that token budget: to get the right context loaded, at the lowest cost, with the least displacement of everything else the agent needs to be thinking about. Everything that follows is in service of that one constraint.

Many agent products with memory features today do not act like they were built with that in mind. Cola did not either, for the first few weeks.

## The impossible file

The first version of Cola had a single memory file, \`memory.md\`, rewritten every night from the day's transcripts and concatenated into the system prompt during the day. It matched what most agents in the space were doing.

Throughout beta before version 0.9.0, the same complaint kept coming back: a user asked Cola to do something on Monday, came back on Thursday, and Cola had no idea what they were talking about.

The reason was not summarization quality. A single memory file is asked to satisfy two demands that cannot both be met:

- **Complete**, because you cannot predict on Tuesday which detail the user will come back asking about on Friday.
- **Short**, because every byte of \`memory.md\` eventually lives in the active context window, burning tokens on every turn and eating into the space left for everything else.

Complete and short. Pick one.

We want both, of course.

A single \`memory.md\` file rewritten every night makes sure it is concise and short. But details were thrown away. When certain ones were needed later, Cola could not recall them right away. Even when it did manage to retrieve the right context, the extra thinking and tool calls cost far more than if we had simply summarized it and dropped it into context up front.

So we started bolting things on. A \`<system-reminders>\` block wrapped up on every user message, surfacing recent tasks as well as a bunch of other things we would like Cola to remember. It was a clumsy design: it polluted the context and burned tokens on every turn. Even with this design, Cola still forgot things because attached reminders still lived in the context, not persisted.

More and more elaborate designs are like bolting an exoskeleton onto Usain Bolt. They add a little, but they hold back the raw power the LLM already has.

## Unleash the power

The solution was getting clear: let the LLM manage its memory the way it was trained to be good at, by managing files with system tools.

We gave Cola a mounted file directory that stores all its memories, with full permissions to manage them. We call it the **Memory Bank**. Memories get written into the files whenever Cola decides to.

This approach has been gaining traction lately, and for good reason. It has real potential. If you look at Claude Code, its _auto memory_ feature is exactly this. Claude Code is instructed in its system prompt to _"build up this memory system over time so that future conversations can have a complete picture of who the user is, how they'd like to collaborate with you, what behaviors to avoid or repeat, and the context behind the work the user gives you."_

However, if you examine how much information actually gets persisted, you will find only a few memory files. And most of what is there is not as relevant as we expected it to be.

It looks like agents are not big fans of making memories. And the same thing happened to Cola.

## The actual problem

The actual problem is this: **asking an agent to actively take notes of its memories is basically asking it to distract itself with a side activity.**

This does not work, or at least does not work well, for a mechanical reason.

A capable LLM agent has an attention gradient shaped by its system prompt and the current user message. When both push it toward focused execution, there is a low probability that it will pull itself off task for bookkeeping.

You can, in practice, make bookkeeping part of the task the system prompt defines. That raises the probability it takes notes, but it is still a distraction from the execution itself. And you still cannot fully control what it remembers, because LLMs are not trained for this.

In production, we found that the more execution- and logic-focused an LLM is, the less likely it is to call tools that do not directly contribute to the goal, as we saw with models like DeepSeek V4 in the Cola agent harness.

## Stop asking the agent to remember

The fix: **stop asking the agent to remember.** That is not its job.

But it could be another agent's.

The main agent stays focused on the work. A side agent watches everything unfold and records what is worth keeping, pulled by an attention gradient we put into its own system prompt, not the main one's.

**A salience agent** runs alongside the main one: small, cheap, single-purpose. It does just one thing on a managed cadence: it reads the conversations and takes bookmarks whenever something worth remembering comes up, according to what it was told to remember.

A salience bookmark looks like this:

\`\`\`md
- <time=YYYY-MM-DD HH:MM +/-TZ> <what to remember/change>. <evidence>
\`\`\`

Why a bookmark, rather than overwriting the memory files directly? We want memory changes to stay robust and comprehensive, as little affected as possible by the LLM's hallucinations or by a lack of context that may only surface later in the conversation.

The idea of the salience bookmark draws inspiration from a notion in computational neuroscience: the **sharp-wave ripple**. During wakefulness, sharp-wave ripples fire between the hippocampus and the prefrontal cortex, tagging salient moments without interrupting normal brain function. During sleep, the prefrontal cortex forges deep, abstract representations of the episodic memories stored in the hippocampus, guided by these salience tags. This process is called **memory consolidation**.

Cola does the same thing, with the help of a salience bookmark agent and a nightly consolidation agent.

Based on the bookmarks made during the day, the consolidation agent pulls up the conversations around the time each bookmark was recorded, then reviews whether a new memory should be added, and if so, how to phrase the part worth remembering.

This is the gist of how Cola's memory system works.

## What's next

What is even more exciting about this architecture is that it opens up the possibility of **dividing the memory bank along context-centric lines**.

Even though mounting a file directory as a memory bank saves a lot of space in the context window, it still takes up some, because the agent needs to load the memory bank's index. As the memory bank grows, so does the index file.

Adding one more layer of abstraction on top solves this problem: **multiple memory banks, each storing a different aspect of the history based on a preset focus of what it should remember, mounted on demand as your needs dictate.**

This is the same constraint we opened with, followed all the way down. A memory system does not win by remembering more; it wins by getting the right context loaded at the lowest cost, displacing as little as possible of what the agent is already thinking about.

Stop asking the agent to remember. Give it pluggable memory banks that load the right memory details only when the moment calls for them, and let it spend the rest of its finite context budget on the real work.

And this will not change as context windows grow: a million tokens, two million, whatever is next. A bigger window does not free you from the constraint; it only makes the efficiency loss and the hidden costs of spending it poorly even harder to notice. **How efficiently an agent uses its context is the real lever on what it is capable of, and that is the problem an AI agent memory system should actually be solving.**
`,d=`---
title: "追着 AI 跑这一年：开始辅助 AI 编程"
description: "Kaibin 记录加入 MarsWave 后这一年工作方式的变化：从 AI 辅助工程师写代码，到工程师开始组织上下文、拆解任务并辅助 AI 编程。"
slug: "a-year-chasing-ai"
date: "2026-06-02"
author: "Kaibin"
authorAvatar: "https://avatars.githubusercontent.com/u/193473096?v=4"
tags: ["AI Native", "Engineering", "Cursor", "Claude", "ColaOS"]
draft: false
---

## 追着 AI 跑这一年：开始辅助 AI 编程

最近和不少工程师朋友聊，发现很多团队到现在还几乎没人用 AI 写代码。有些人是没试过，有些人是试了觉得不靠谱。我理解，因为一年前我也差不多。

回过神来想想，在 MarsWave，不用 AI 已经是一件很难想象的事了。

2025 年 1 月，我从一家 To B 工具公司离职，作为第一个员工加入了 MarsWave。那时候什么都没有，产品没有，流程没有，团队也还在拉。大家看到的 AI 似乎还不是很聪明。它还只能做好一些独立的、有明确限制约束的小事；我们也想着，从这些小事里找到一个方向，做一个播客音频生成工具。

刚开始，每一个入职的工程师，加入第一件事就是开通 Cursor 账号。

2025 年上半年，Cursor 对工程师来说已经如虎添翼，尤其是时至今日依然行业领先的自动补全。那个时候工程师敲入寥寥几个单词，它就能补一行，甚至一个函数，但大部分时候还是靠工程师想逻辑、查文档、调报错。

AI 明显还无法替代人。我们做集群部署，AI 给的方案看起来很完整，命令也一套一套的，问它行不行，它永远说行，结果一跑就炸。最后还是自己看 issue、翻文档，才把问题解掉。整体下来，有人效提升，但本质上还是工程师主导，AI 只是加速器。

那个时候我真的觉得：AI 是个好工具，但工程师还是不可替代的。

时间很快来到了 2025 年下半年，Claude 4.5 来了，改变了所有人的工作方式。也是从这时候开始，网上“工程师要被 AI 替代”的声浪逐渐变大。

具体哪一天我已经说不清了，但从那个时间开始，我突然发现，自己从“写代码”变成了“看代码”。

一个需求过来，我不再是打开编辑器从第一行开始敲，而是先简单描述需求，让 AI 出规划。

我的工作变成了和它讨论哪里有隐患，是不是该提前规划，如何处理历史数据。

时不时地，运营同事开始分享他们构建的内部工具页、自动回答机器人知识库。他们不是工程师，也没系统学过代码，但需求描述得清楚，上下文也给得完整，最后出来的东西能直接用。

我其实有点恍惚。以前这种活一定会排给前端，现在一个运营同事看起来一个晚上就做出来了。你很难说它多优雅，但它能用。

那一刻我才真的感觉到，规则变了。

现在团队里，没有产品、工程师、运营的固定边界，每个人都在生产代码。ColaOS 的代码是公司每个人的 AI 一起写出来的。几乎所有代码都经过 AI 生成、修改或者 review。

从今天看，工程师在交付环节，不是简单地从“生产者”变成“审核者”。更准确地说，工程师现在要负责把问题摆到 AI 能处理的位置上。

线上 bug，用户反馈某个流程跑不通。如果是以前，我会自己看日志、打断点、顺调用链。现在我会先把前端报错、后端日志、用户操作路径、相关代码段整理出来，再交给 AI。

信息给得好，它五分钟就能定位到问题。
信息给得不好，它能陪你绕一个小时，最后给你一个看起来很合理、其实完全没用的答案。

我见过非工程背景的同事跟 AI 聊了 50 多轮，还是没解决一个问题。不是 AI 不行，是他不知道该给什么信息。他把所有东西一股脑丢过去，AI 反而被噪音淹没了。

而一个有经验的工程师，往往直觉上就知道问题可能在哪一层。前端状态、接口入参、异步任务、权限、缓存、数据库约束，先排哪几个，后排哪几个，他心里有数。于是他只给五六条关键信息，三轮对话就能把问题收住。

这一年我越来越觉得，真正拉开差距的不是“会不会用 AI”，而是“会不会组织上下文”。

这种能力不只在写代码里有用。

现在的做法是，把需求场景、性能要求、部署环境、现有技术栈整理成一份文档，让 AI 先做方案对比。它会列出每种方案的优劣、适用场景、潜在坑点。我们要做的是判断：它说得对不对，适不适合我们。

你不一定非得是专家，但你得能把问题问清楚，也得能判断答案有没有跑偏。

效率差距确实很夸张。早期我们两个开发花一个月，才交付一个最初版只有生成播客音频能力的 ListenHub。现在同样一个月，已经能做出一个能在 Mac、Windows 双端交付，有灵魂、会给你写日志，并且帮你操作整个电脑的 ColaOS。

所以这一年追着 AI 跑，我最大的收获不是学会了哪个模型，也不是换了哪个工具。

是我接受了一件事：过去那种自己写代码、自己查文档、自己扛交付的工作方式，已经回不去了。不是它不好，而是效率差距太大，大到你没法假装看不见。

以前是 AI 辅助我编程。
现在很多时候，是我在辅助 AI 编程。

我负责把任务拆清楚，把上下文放到位，把边界和验收标准说清楚。AI 负责快速执行。而最后结果能不能上线、出了问题谁负责，仍然是人的事。

所以如果有人问我，现在入场 AI 晚不晚，我的回答是不晚。

但你追的最好不是“哪个模型又更新了”。模型会一直变，工具也会一直变。真正值得追的是：你的工作方式有没有因为这些东西发生变化。
`,f=`---
title: "从全员 Builder 到 AI Native：一个老程序员的重新定位"
description: "Zili 记录从 ListenHub 到 ColaOS 的工作方式变化：从 AI 辅助开发，到在 AI Native 团队里让 AI 稳定地产出。"
slug: "from-all-hands-builder-to-ai-native"
date: "2026-06-03"
author: "Zili"
authorAvatar: "https://avatars.githubusercontent.com/u/215250293?v=4"
tags: ["AI Native", "Builder", "Engineering", "ColaOS"]
draft: false
---

## 从全员 Builder 到 AI Native：一个老程序员的重新定位

## 我的履历

13 年参加工作，入行就开始做移动端。最开始在一家“创业八年”的小公司工作，两年后加入某上市公司，在那里待了近十年。
25 年 6 月底来到 MarsWave。按年龄来说，正值中年；按当下互联网环境来说，已经过了“毕业”的年纪了。

这篇文章主要聊聊来到 MarsWave 后，我对自己定位的一些变化。

## 做 ListenHub 的 8 个月

### 传统开发方式

刚来 MarsWave 时，我主要负责 ListenHub 的移动端。

这部分工作对我来说不算陌生。
虽然产品是新的，团队是新的，但移动端工程本身还在我的舒适区里。
架构设计，框架选型，开发流程，线上发布，这些事情我已经做过很多年了。

在这个阶段，我开始用 AI 辅助开发。当时主要使用 Cursor，大部分是 tab 补全，也会让它帮我生成一些模版代码。
但很少让它写完整逻辑，大部分时候还是我在写，它在旁边补。
即便如此，当时也觉得很惊艳。尤其是 tab 补全，经常能根据上下文补出我下一步想写的代码，好像真的“懂”我。

### 全员 Builder

真正不一样的是协作方式。
以前在相对成熟的公司，工作更像一条固定链路：产品提出需求，UI 给出设计，研发实现，测试验证。
每个人都有比较明确的位置，事情也会按照熟悉的流程往前走。
在大团队里，研发参与决策的空间通常有限。更多时候，我们是执行者，负责把需求变成代码。

而在 ListenHub 阶段，我们强调全员 Builder。
每个人都需要更主动地做判断，也更有机会参与从需求到交付的全过程。
对传统研发来说，这个变化很明显。
过去研发天然站在实现环节的中心。
需求要变成代码，通常需要经过研发这一层。
现在实现能力被 AI 放大之后，很多角色都可以更直接地靠近代码。
研发不再只是“会写代码的人”。

真正让我有触动的一次，是测试同学借助 AI 修复了线上 bug。
我非常惊讶和佩服，甚至有一点危机感。
过去我默认线上问题需要研发定位和修复。这是我很熟悉的工作边界。
那一刻我突然意识到，这条边界正在变薄。
别人也在进步，模型也在进步，而我不能只站在过去的工作方式里。

ListenHub 的 8 个月里，我还是以传统开发方式为主。AI 更多是在旁边辅助我。
但全员 Builder 让我意识到，研发的边界正在被重新定义。

## 做 ColaOS 的 3 个月

今年 3 月开始，我们转向 ColaOS。这件事对我来说变化更大。
我主要负责 ColaOS 的 App 部分。它是桌面端，是 Agent 的输入和输出 GUI。

### 第一次冲击

一次模型能力升级后，我明显感觉到 AI 的能力又往前走了一步。
真正用起来以后，我意识到它真的可以完成很多复杂的需求，会自己拆分步骤并给出一个可以运行的结果。
相比第一次接触 Cursor，这次的感觉更像是看到一个真正能够独立工作的同事。
至少在很多具体编码任务上，它比我想象中能打。

### 路径依赖

做 ColaOS 的时候，我明显感觉到路径依赖的存在。
**限制想象力的，不是我们不会什么，而恰恰是我们会什么。**
程序员知道太多技术细节。知道得越多，有时候越不敢尝试。还没开始做，脑子里已经先跑了一遍失败路径。
久而久之，谨慎会变成一种惯性。
它让我们看起来更专业，但也可能让我们更保守。

我在非技术同学身上看到的状态不太一样。
他们没有那么多技术路径依赖，反而更相信 AI，也更敢用 AI。
他们会直接把问题抛给 AI，让 AI 读代码、做原型、改界面、定位问题，甚至尝试修复 bug。
很多时候，他们不是不知道风险，而是不会一开始就被风险拦住。
这件事让我意识到我应该向他们学习。
以前我会觉得，技术细节知道得越多，判断就越准确。现在我开始意识到，知道太多也会限制想象力。
尤其是在 AI 能力快速变化的时候，过去那些“不能做”“不好做”“不值得试”的判断，可能已经需要重新评估。

### AI Native

到了 ColaOS 阶段，我们也从全员 Builder 进入了 AI Native。
如果说全员 Builder 是每个人都可以借助 AI 参与构建，那么 AI Native 就意味着很多事情一开始就围绕 AI 来设计。
产品形态、交互方式、工程实现、问题排查，都不再只是把 AI 当成一个辅助工具。它变成了工作方式的一部分。

对我个人来说，最大的变化是开发方式。
ColaOS 阶段，我开始把很多具体实现交给 AI 完成。
这和 ListenHub 阶段的使用方式完全不同。

以前是我写代码，AI 辅助我。
现在则是我描述目标、补充上下文、判断方案，再让 AI 去完成实现。
当然，这不是把需求或者问题扔给 AI 就结束。
我会让它先读具体代码，再描述问题和目标。然后让它先给计划，再从不同角度审查计划。实现之后，还要看边界条件、异常路径和可维护性。
最后还要通过人工体验、测试验证、日志、灰度和自动化测试去保证结果。

我的心态也发生了很大变化。我开始信任 AI。

## 重新定位

回头看这两个阶段，我的变化其实很清楚。

ListenHub 阶段，我开始用 AI，但它主要是辅助。ColaOS 阶段，AI 开始承担更多具体实现。
我也从“检查 AI 有没有写错”，逐渐转向“怎么让 AI 更稳定地写对”。
以前我更关注自己能不能稳定输出。现在我开始关注能不能让 AI 稳定地产出。

这并不意味着工程师不重要了。
恰恰相反，拆解问题、精确描述需求、判断技术方案、控制质量，这些事情变得更重要了。
技术能力没有失效，只是被调用的方式变了。
我的转型不是离开编码，而是让 AI 稳定地产出。

有点像网上那句话：**相信相信的力量**。
以前我觉得这句话有点玄。现在放在 AI 开发里，倒是能理解一点。
要像信任同事一样信任 AI，才能真正发挥它的能力。

我还没有完全想清楚“老工程师”在 AI Native 团队里的最终形态，因为我也在慢慢进化。
但至少现在我知道，过去十几年积累的经验没有失效。它只是需要换一种用法。
`,p=`---
title: "ColaOS 中 Windows 沙箱设计演进"
description: "Gaoyang 记录 ColaOS Windows 内测版中基于 Detours 的 fshook 沙箱设计，从文件 IO Hook 原理到生产环境里的进程收敛、策略下发、日志通道和违规反馈。"
slug: "colaos-windows-sandbox-design-evolution"
date: "2026-06-04"
author: "Gaoyang"
authorAvatar: "https://avatars.githubusercontent.com/u/734818?v=4"
tags: ["Windows", "Sandbox", "Detours", "Security", "ColaOS"]
draft: false
---

## ColaOS 中 Windows 沙箱设计演进

ColaOS 的 Windows 内测版本在推出前，考虑到 Windows 系统本身在安全方面比较脆弱，且我们也不能够保证大模型输出的指令是 100% 没有缺陷的，所以就设计了一套沙箱机制，把大模型输出的命令关在笼子里。

由于对安全的重视程度比较高，我们很快进行了调研，并给出了解决方案：借助微软的 [Detours](https://github.com/microsoft/Detours) 来对操作系统的文件 IO 相关一系列函数加钩子，以便拦截到当前读写的目标文件路径，对于非法路径拦截即可。

## 1. 原理分析

Microsoft 的 Detours 本质上是一个 Inline Hook（内联钩子）框架。它通过修改目标函数开头的机器指令，把执行流重定向到你的函数（Detour Function），同时保存被覆盖的原始指令到一个 Trampoline（跳板函数）中，以便后续还能调用原函数。

举一个例子，我们假定当前操作系统是 32 位，我们要修改的函数为 \`WriteFile\`，其汇编指令如下：

\`\`\`asm
55           push ebp
8B EC        mov  ebp, esp
83 EC 28     sub  esp, 0x28
53           push ebx
56           push esi
57           push edi
8B 7D 08     mov edi, [ebp+08h]
...省略后面的指令
\`\`\`

**代码 1.1 WriteFile 原始指令**

Hook 之后，其指令会变成下面这个样子：

\`\`\`asm
E9 XX XX XX XX   jmp 32 位内存地址
53               push ebx <--- 标记一下位置，后面会讲到
56               push esi
57               push edi
8B 7D 08         mov edi, [ebp+08h]
...省略后面的指令
\`\`\`

**代码 1.2 Hook 之后的 WriteFile 指令**

代码 1.2 跟代码 1.1 相比，前面 6 个字节被覆盖了，变成了一个跳转指令，这个地址指向你自定义的函数，我们这里记为 \`MyWriteFile\`。

写到这里，大家可能会好奇，这么一番操作，原来 6 个字节不是丢了吗？Detours 其实在此同时新开辟了一片内存，也就是前面提到的 Trampoline 函数，其指令示例如下：

\`\`\`asm
55               push ebp
8B EC            mov  ebp, esp
83 EC 28         sub  esp, 0x28
E9 XX XX XX XX   jmp 到 代码 1.2 中的第 6 个字节的位置
\`\`\`

**代码 1.3 Trampoline 函数指令**

这个 Trampoline 函数在设计的时候没有拷贝完整的原始 \`WriteFile\` 指令，而是只拷贝了覆盖后的前部几个字节，执行完前面 3 条指令后，再跳转到 Hook 后的 **代码 1.2** 中第 6 字节位置，执行剩余指令。

给出一段真实的使用代码：

\`\`\`c++
// detours_writefile_hook.cpp
// 编译：cl /EHsc detours_writefile_hook.cpp /link detours.lib
// 需要：Microsoft Detours（https://github.com/microsoft/Detours）

#include <windows.h>
#include <detours.h>
#include <cstdio>

// ── 1. 保存原始函数指针（pTarget）──────────────────────────────────────
//    DetourAttach 会把这个指针改写为指向 Trampoline
static BOOL (WINAPI *pTarget_WriteFile)(
    HANDLE       hFile,
    LPCVOID      lpBuffer,
    DWORD        nNumberOfBytesToWrite,
    LPDWORD      lpNumberOfBytesWritten,
    LPOVERLAPPED lpOverlapped
) = WriteFile;   // 初始值 = WriteFile 真实地址


// ── 2. Detour 函数（代理）─────────────────────────────────────────────
BOOL WINAPI MyWriteFile(
    HANDLE       hFile,
    LPCVOID      lpBuffer,
    DWORD        nNumberOfBytesToWrite,
    LPDWORD      lpNumberOfBytesWritten,
    LPOVERLAPPED lpOverlapped)
{
    // ── 前置拦截：打印要写出的内容 ──────────────────────────────────
    printf("[HOOK] WriteFile called, %lu bytes: \\"%.*s\\"\\n",
        nNumberOfBytesToWrite,
        (int)nNumberOfBytesToWrite,
        (const char*)lpBuffer);

    // ── 调用 pTarget：此时 pTarget 指向 Trampoline ──────────────────
    //    Trampoline 执行被覆盖的原始字节，再 JMP 回 WriteFile+N 继续
    BOOL result = pTarget_WriteFile(
        hFile,
        lpBuffer,
        nNumberOfBytesToWrite,
        lpNumberOfBytesWritten,
        lpOverlapped
    );

    // ── 后置拦截：检查返回值 ─────────────────────────────────────────
    if (result)
        printf("[HOOK] WriteFile succeeded, wrote %lu bytes\\n",
            lpNumberOfBytesWritten ? *lpNumberOfBytesWritten : 0);
    else
        printf("[HOOK] WriteFile failed, GLE=%lu\\n", GetLastError());

    return result;
}


// ── 3. 安装 / 卸载 Hook ───────────────────────────────────────────────
static void AttachHook()
{
    DetourTransactionBegin();
    DetourUpdateThread(GetCurrentThread());

    // 把 pTarget_WriteFile 改写为 Trampoline 地址
    // 同时把 WriteFile 入口前 N 字节替换为 JMP MyWriteFile
    DetourAttach(
        reinterpret_cast<PVOID*>(&pTarget_WriteFile),
        reinterpret_cast<PVOID>(MyWriteFile)
    );

    LONG err = DetourTransactionCommit();
    printf("[HOOK] AttachHook: %s (err=%ld)\\n",
        err == NO_ERROR ? "OK" : "FAILED", err);
}

static void DetachHook()
{
    DetourTransactionBegin();
    DetourUpdateThread(GetCurrentThread());

    // 恢复 WriteFile 入口原始字节，pTarget_WriteFile 还原为真实地址
    DetourDetach(
        reinterpret_cast<PVOID*>(&pTarget_WriteFile),
        reinterpret_cast<PVOID>(MyWriteFile)
    );

    LONG err = DetourTransactionCommit();
    printf("[HOOK] DetachHook: %s (err=%ld)\\n",
        err == NO_ERROR ? "OK" : "FAILED", err);
}


// ── 4. 测试入口 ───────────────────────────────────────────────────────
int main()
{
    // 创建测试文件
    HANDLE hFile = CreateFileA(
        "test_output.txt",
        GENERIC_WRITE, 0, nullptr,
        CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, nullptr
    );
    if (hFile == INVALID_HANDLE_VALUE) {
        printf("CreateFile failed: %lu\\n", GetLastError());
        return 1;
    }

    // ── 安装 Hook ─────────────────────────────────────────────────────
    AttachHook();

    // 此后所有 WriteFile 调用都会经过 MyWriteFile
    const char* msg1 = "Hello from hooked WriteFile!\\n";
    DWORD written = 0;
    WriteFile(hFile, msg1, (DWORD)strlen(msg1), &written, nullptr);

    const char* msg2 = "Second write, still hooked.\\n";
    WriteFile(hFile, msg2, (DWORD)strlen(msg2), &written, nullptr);

    // ── 卸载 Hook ─────────────────────────────────────────────────────
    DetachHook();

    // 恢复后 WriteFile 直接执行，不再经过代理
    const char* msg3 = "This write is NOT hooked.\\n";
    WriteFile(hFile, msg3, (DWORD)strlen(msg3), &written, nullptr);

    CloseHandle(hFile);
    printf("[MAIN] Done. Check test_output.txt\\n");
    return 0;
}
\`\`\`

**代码 1.4 一个真实的 C++ 示例**

我们对于代码 1.4 做一个调用链路追踪的话，大体是这样的：

\`\`\`text
WriteFile(...)
  → JMP MyWriteFile         ← 前 6 字节已被替换
      → 前置日志
      → pTarget_WriteFile() ← 调用 Trampoline
          → 原始前 6 字节执行
          → JMP WriteFile+6 ← 跳回函数体继续
          → 返回 BOOL
      → 后置日志
      → return result
\`\`\`

**代码 1.5 Hook 后的调用链路图**

补充说明一下，为了简化演示程序，**代码 1.4** 中给出的程序可以做到 Hook 本进程的函数调用。如果你想 Hook 其他进程，需要封装一个 DLL 的项目，然后用函数 \`DetourCreateProcessWithDllW\` 来启动你要 Hook 的目标进程。

## 2. 应用

最早那版只 Hook 一个写入函数的方案，放到生产环境就立刻碎成渣。Windows 上能改动文件系统状态的入口太多，命令行又是黑盒，大模型输出一句“删除”、一句“移动”、一句“复制”，全都绕过最初设想的那个写入入口。在 ColaOS 内部我们正式立项做了一版工程化的 Detours 沙箱，命名为 **fshook**。这一节把 fshook 在生产中踩过的坑和最终的工程取舍完整展开。这套方案目前是国内为数不多敢直接把大模型生成的命令塞进系统命令行而不被用户骂的实现之一。

### 2.1 把“加钩子的函数”从 1 个扩到二十几个

写文件这个动作只是文件系统改动的众多出口之一，且根本不是常见出口。复盘大模型实际生成的命令，真正能让文件系统状态发生变化的内核入口要广得多，我们最终在 fshook 里覆盖了下面这几大类：

- **创建与打开文件**：所有要落到磁盘上的写操作都从这里起步；
- **删除**：包括单文件删除和目录删除；
- **移动与重命名**；
- **复制**：含若干个不同年代、不同进程模型的复制接口；
- **通过句柄做改名、截断、标记删除**：这是最容易被忽略的一类。很多程序拿到一个已经打开的文件句柄之后，直接用句柄级接口做改名或者把文件截断到 0 字节，根本不会再走前面那些以路径为参数的命名接口，单拦命名接口是挡不住的；
- **替换文件**：原子覆盖语义；
- **硬链接和符号链接**：链接落点在白名单外，等于绕过了路径限制；
- **Shell 批量操作**：资源管理器和 PowerShell 的批量删除走的就是这条出口，参数形态还是双零结尾的字符串列表，最阴险；
- **子进程创建**；
- **可选的只读探测**：列目录、查属性这一类，主要用来按需收紧。

写、删、移、改属性、重命名、改 EOF 截断，这几类钩子缺一个都会漏。其中“通过句柄改名”这条钩子尤其关键：实现时不仅要拦“源句柄是不是越权打开的”，还要把入参里携带的**目标路径**解码出来再判一次白名单，否则大模型可以玩“先在白名单里建文件、再改名挪到白名单外”的逃逸。

### 2.2 不再递归注入：进程黑名单 + 强制收敛到系统命令行

原文里讲过 Detours 提供的 \`DetourCreateProcessWithDllW\` 接口只能注入入口进程的问题，曾尝试在子进程创建钩子里再嵌套一次，做递归注入。这个方案在 ColaOS 的灰度里很快就废了，原因有三：

- **加载时机**：Detours 自身依赖一组帮助代码在目标进程里完成挂钩，在子进程刚刚被挂起、加载器还没跑通的窗口期再嵌一层会触发各种竞争，崩溃率高得无法忍受；
- **跳板重入**：父进程钩子表里的函数指针进入子进程之后已经无效，盲目复用会写到错误地址；
- **位宽错配**：32 位父进程启动 64 位子进程，或者反过来，根本没法共用一份 DLL，自己得做位宽分发，极易踩到镜像格式不匹配的错误。

最终的工程方案干脆**放弃递归注入**，转而走两条腿：

1. **进程黑名单收敛“危险壳”**：把一组小写的可执行文件名通过环境变量传给 DLL，钩子在子进程创建那一刻先解析出目标程序的文件名（这里特意不走 Windows 自带的命令行解析接口，免得在 DLL 加载早期触发额外的系统模块加载死锁），命中黑名单的直接拒绝。被掐掉的主要是脚本宿主和注册表工具这两类。它们一旦放出去就等于放开了一整条不受控的执行路径；其余的 git、npm、node、python、findstr 这些纯外部工具一律放行，大模型该用的工具一个不少。

2. **入口 shell 强制收敛到系统命令行**：对外只暴露一个简化命令行，所有复杂逻辑都被压在一个一次性、不读自动运行项、引号语义最朴素的执行模式里。这样既能挡住“模型想偷偷再起一层 shell”的小动作，又把命令解析行为约束在一个稳定可预测的子集里。配上工具描述里给大模型的硬约束：只允许传命令体本身、不允许自己再嵌一层。入口被强制收敛之后，不需要递归 Hook 也能挡住绝大多数路径。

### 2.3 配置走环境变量，日志走命名管道

DLL 注入之后，主进程怎么把白名单和黑名单告诉它，又怎么实时收到拦截事件？fshook 用了一对很 Unix 的工程选择：

- **下行（配置）下发**：直接走环境变量。主进程在拉起子进程时把策略塞进环境，DLL 在加载初始化阶段一次性读出来，按分号切分、统一转小写、白名单目录强制补尾分隔符，全部缓存到内存里。环境变量天然会被子进程继承，即便有递归层级也不会丢策略（哪怕真用进程黑名单已经把递归打住了）。

- **上行日志**：每次启动现场起一个**独占的命名管道**，路径里带进程号和随机后缀避免冲撞。主进程作为服务端在管道上等着，DLL 作为客户端连进来，把宽字符日志统一转成 UTF-8 字节写过去。这条通道专门拿来传调试日志和策略加载情况，干净、独立、不污染目标进程的标准输出。

- **拦截事件**：走标准错误流的结构化文本协议，一行一条记录，按竖线分隔字段，依次是固定标记、拦截类型、UTC 时间戳、进程号、被命中的接口名、被命中的路径。主进程按行解析成定长结构再分发：纯文件越权归到一类，进程黑名单命中归到另一类（这一类还会把原始报文顺手回填到大模型的输入里，让它下一轮自己看到“这个 exe 不让我跑”，主动换工具）。

每条日志都用单次写调用完成，靠运行时自身的行缓冲提供最小化的多线程原子性。简单粗暴但够用，省了一套互斥锁。

### 2.4 违规聚合与“拒绝即建议”

DLL 拦下来的事件，主进程并不会立刻处理，而是把违规路径攒到一个待处理队列里，由上层做去重、聚合，再以“用户可读”的形式把违规事实喂回给大模型。它在下一轮推理时就知道刚才哪条路径被挡、应该改写命令绕开它，而不是傻乎乎重试同一条删除。这一步把“沙箱”从一个被动的安全围栏变成了**模型行为的反馈通道**，让 agent 自己学会 respect 边界，是 ColaOS 内测体验大幅好转的关键。

整套 fshook 大约一千多行 C++ 加上不到三百行 TypeScript，单二进制（一个启动器加一个注入 DLL）就能在任何一台标准 Windows 上跑，不需要驱动、不需要管理员、不依赖容器、不动 ACL。这是 ColaOS Windows 内测能在真实用户机器上“既敢让大模型敲命令、又不至于把人家硬盘格了”的工程基石。
`,m='---\ntitle: "一次 pnpm audit --fix 的小发现"\ndescription: "记录 pnpm 11 中 pnpm audit --fix 的 override 和 update 两种修复方式，以及 minimumReleaseAgeExclude 带来的配置维护问题。"\nslug: "some-thoughts-on-pnpm-audit-fix"\ndate: "2026-06-05"\nauthor: "LitoMore"\nauthorAvatar: "https://avatars.githubusercontent.com/u/8186898?v=4"\nauthorUrl: "https://github.com/LitoMore"\ntags: ["pnpm", "Security", "Dependencies", "Maintenance"]\ndraft: false\n---\n\n最近我们的项目升级了 [pnpm 11](https://pnpm.io/blog/releases/11.0)，在维护项目依赖的时候我看了下 `pnpm audit --fix` 会怎么修漏洞。`pnpm audit` 本身很好理解，它会检查 lockfile 里的依赖是否命中了已知漏洞。但到了执行 `--fix` 这一步，事情就开始变得有点微妙了。\n\n我原本以为它会直接把依赖树更新到安全版本。实际看下来，pnpm 默认做的是另一件事：`pnpm audit --fix` 等价于 `pnpm audit --fix=override`，它会把修复版本写进 `pnpm-workspace.yaml` 的 `overrides`，然后让下一次 `pnpm install` 应用这个解析规则。不过这其实挺符合 pnpm 的思路。很多漏洞出现在 transitive dependencies 里，你不一定能直接修改上游依赖的 `package.json`。这个时候用 `overrides` 表达“这个范围不能再解析到脆弱版本”，会比强行改某个直接依赖更稳。但它也有一个很明显的副作用：这条规则会留在项目配置里，之后每一次 install 都会继续受它影响。\n\n后来我又看了 `pnpm audit --fix=update`。这个模式更接近“把当前结果修掉”：它会尝试更新 vulnerable packages，让 lockfile 里的版本离开受影响范围，必要时也会更新直接依赖声明。和 `override` 比起来，`update` 留下的配置负担更少，但它也不一定能修掉所有漏洞。如果依赖关系卡住了，或者 advisory 没有可用的 patched range，它就只能留下 remaining vulnerabilities。所以这两个模式并不是「保守」和「激进」的区别，而是一个改规则，一个改结果。`override` 解决的是以后怎么解析，`update` 解决的是现在 lockfile 里是什么。\n\n如果一个 hybrid 模式呢：先 update，修不掉的再 override。听起来很合理，但越想越觉得它不好定义。如果 update 只修掉一部分路径，报告应该怎么算？如果后面自动写了 override，下一次运行要不要试着删掉？如果用户本来就写了自己的 override，pnpm 又怎么知道哪一条是 audit 生成的？也许正是因为这些边界不清楚，pnpm 现在把两个模式分开。你可以先跑 `pnpm audit --fix=update`，如果还有剩余问题，再决定要不要跑默认的 `pnpm audit --fix`。这没有那么自动化，但副作用至少是清楚的。\n\n另一个有意思的地方是 `minimumReleaseAge`。pnpm v11 把它的默认值改成了 `1440`，也就是新发布的版本需要等一天才会被解析到。这个设置是为了 supply chain security，避免项目马上装到刚发布、还没来得及被社区发现问题的版本。但安全补丁也经常是刚发布的。于是 `audit --fix` 会遇到一个矛盾：patched version 是安全修复，但它可能还没满足 `minimumReleaseAge`。pnpm 的处理方式是，当 `minimumReleaseAge` 生效时，`pnpm audit --fix` 和 `pnpm audit --fix=update` 会把每个 advisory 的最小 patched version 加到 `minimumReleaseAgeExclude`，让安全修复可以绕过 release age 窗口。\n\n我觉得这个取舍是可以理解的。继续停留在已知 vulnerable version 是确定风险，而刚发布的 patched version 是潜在风险。pnpm 在这里选择先处理确定风险。但这个设计留下了一个维护问题。`minimumReleaseAgeExclude` 里的 exact version 通常只在短时间内有用。等这个版本已经发布超过一天，它本来就满足 `minimumReleaseAge` 了，对应的 exclude 就不再必要。可是 pnpm 现在不会自动清理它。\n\n这也是我提 [pnpm/pnpm#11668](https://github.com/pnpm/pnpm/issues/11668) 的原因。长期使用 `pnpm audit --fix` 或 `pnpm audit --fix=update`，`minimumReleaseAgeExclude` 会不断追加版本。它们当时是有意义的，但过了 release age 窗口后就变成了配置里的历史记录。半年后再看 `pnpm-workspace.yaml`，你很难判断某条 exclude 是 audit 自动加的、维护者手动加的，还是早就可以删了。自动清理看起来简单，但实际也有成本。pnpm 需要知道版本发布时间，这可能要读取 registry metadata；它还需要避免误删用户手写的 exact version。所以我更倾向于未来有一个显式的 cleanup 机制，而不是让 `audit --fix` 或 `install` 在背后偷偷清理。\n\n最后我的维护流程大概会是这样：想尽量少留下长期配置，就先试 `pnpm audit --fix=update`；如果 update 修不掉，再考虑默认的 `pnpm audit --fix`。但只要项目里开了 `minimumReleaseAge`，我都会多看一眼 `pnpm-workspace.yaml`，因为 `overrides` 和 `minimumReleaseAgeExclude` 都不是一次性的日志，它们会继续影响之后的 install。\n\n分析下来我会觉得 pnpm 11 的每个功能模块之间有些割裂，虽然上了很多不错的功能，但到了实际开发情境下又显得不太得劲儿。接下来我应该会尝试给 pnpm 提一版代码，沿着 [pnpm/pnpm#11668](https://github.com/pnpm/pnpm/issues/11668) 里提到的方向优化这块体验。比起让 `audit --fix` 或 `install` 自动做太多事情，我更想先尝试一个显式的维护入口，比如增加一个 `pnpm clean` 命令，专门用来清理这类已经不再需要的 `minimumReleaseAgeExclude` 条目。这样清理动作是可预期的，也不会和安全修复本身混在一起。\n\n## Links\n\n- [pnpm audit](https://pnpm.io/cli/audit)\n- [minimumReleaseAge](https://pnpm.io/settings#minimumreleaseage)\n- [minimumReleaseAgeExclude](https://pnpm.io/settings#minimumreleaseageexclude)\n- [pnpm#11668](https://github.com/pnpm/pnpm/issues/11668)\n\n原文 [https://litomore.me/zh/posts/some-thoughts-on-pnpm-audit-fix/](https://litomore.me/zh/posts/some-thoughts-on-pnpm-audit-fix/)\n',h=`---
title: "在 AI 项目里，质量判断会被很多链路影响"
description: "Cola QA 如何把 pre-review、Eval、CDP、Prism、环境、报告和发布链路串起来，让质量信号真正支撑发布判断。"
slug: "quality-signals-in-ai-agent-projects"
date: "2026-06-06"
author: "Shuo"
authorAvatar: "https://avatars.githubusercontent.com/u/212491417?v=4"
tags: ["QA", "Eval", "CDP", "Prism", "Release"]
draft: false
---

## 在 AI 项目里，质量判断会被很多链路影响

在 Cola 里，QA 需要关注的事情并不只在某一处。pre-review、Eval、CDP、Prism、case、测试环境、凭据、报告、发布链路，看起来是不同环节。但它们其实都在影响同一个问题：最后拿来做判断的质量信号，到底能不能信。

在传统 QA 里，环境是不是干净、case 有没有代表性、报告口径是不是一致、发布影响面是不是清楚，本来就是要看的东西。Cola 的难点在于，它是一个 AI agent 产品，这些问题会被揉进模型、prompt、工具调用、上下文、运行环境、登录态、自动流程、评判、报告这些链路里。

所以在 Cola 里做 QA，不是只盯着某一个测试入口，而是要把质量信号从哪里来、有没有跑出来、有没有被污染、最后能不能支撑决策这几件事拆清楚。

可以把这些工作拆成三层：

- 测试前置：把重复问题尽量提前到开发阶段，不要都等到最后测。
- 测试本身：让 Eval、CLI、CDP、Prism、case 这些质量信号真的跑出来，并且能支撑判断。
- 发布相关：把 build、publish、rollout 这几个动作拆清楚，由 QA 判断当前版本是否通过、能不能发布、发布时的灰度策略，减少线上影响，避免误发。

## 测试前置，把重复问题提前“re”

在 AI 辅助开发之后，代码改动速度确实快了很多。每天可能会提交十几个 PR，如果所有问题都等到最后集中测试，节奏肯定跟不上。

所以我做的一件事，是把已经出现过的 review 问题往前放。

自动 review 工具一次检查可能要几分钟，慢的时候十几分钟，而且不一定会在一次 review 里把所有问题都列出来。这样很容易变成提 PR、等 review、报 bug、修复、再提 PR、再等 review 的循环，开发速度会被拖慢。

所以我做 pre-review 的初衷，是希望把一部分已经出现过的问题提前到本地发现，减少 PR review 里的反复等待。我不是人工一条条总结，而是让 Claude 直接用 \`gh\` 去捞历史已经 merge 的 PR，把里面被 review 出来的问题整理成团队可以复用的 skill，让开发在提 PR 前先在本地跑一遍。

后来这件事也可以看成一个前置测试点。它不是为了多加一个流程，而是为了让一些老问题不要每次都在后面重新出现。比如语言语义坑、边界情况、竞态判断、生命周期问题、数据迁移兼容性，这些问题如果能在开发阶段发现，就不要等到合并之后、构建之后、发布之前再发现。

这也比较符合 AI 项目里的节奏：既然开发速度被 AI 放大了，我也不能只靠后置检查消化问题，而是要把历史问题转成开发阶段能用的检查能力。

## 测试本身，让质量信号真的跑出来

### Eval：已经落地的基础质量判断

Eval 早期它不是没有评测能力，而是评测结果还没有充分变成团队日常判断的依据：跑出来之后怎么留存、失败怎么追、报告怎么看、能不能和发布节奏接上，都还需要继续补齐。后面做 Eval 重构时，我重点处理的是把它从“能跑一次”往“能持续产出可判断的质量信号”推进。随着 CLI eval、CDP eval、nightly-build、daily-smoke 这些链路逐步搭起来，Eval 才开始更稳定地支撑版本能不能进入下一步的判断。

这里面不是单纯多跑几个 case 的问题。从执行到上传、从报告到成本、从失败追踪到通知摘要，整条链路里任何一层有问题，都会让最后的质量结论变得不可信。比如有些 run 看起来跑了，但结果留不下来；有些报告生成了，但数据口径不一定准；CLI 和 CDP 混在一起时，失败原因也不好判断。

所以我做的不是简单多跑一些 case，也不是把自动流程包装得更好看，而是先把这些问题拆开。

CLI eval 和 CDP eval 分开跑，daily smoke 负责编排；结果不能只留在运行机器的临时目录里，要能持久保存；取消、超时或者上传失败之后，结果也要能追、能重新补传；报告里要接真实成本数据，agent 成本和 judge 成本要分开看；summary 和通知不能只告诉大家“跑了”，还要尽量让人看出这次跑出来的东西有没有参考价值。

我对 Eval 的定位也比较明确：它不是证明产品没有 bug，而是发布前的基本盘。至少要回答几个问题：构建完成的安装包基础功能是否正常，agent 能不能启动，登录态能不能用，核心任务有没有明显挂掉，UI 有没有明显问题，生成内容有没有明显跑偏，报告能不能正常产出。

这套固定动作稳定之后，每次改 bug、改底层逻辑、改登录逻辑、改网关，就不需要临时判断要不要测、测哪些、结果怎么看。它会成为版本进入下一步之前默认要看的基础质量信号。

### CDP：覆盖真实应用链路

它不能只理解成“跑一下 UI”。CLI eval 能说明 agent 在某个执行路径下能跑，但 CDP eval 会经过安装包启动、Electron UI、登录态、页面交互、文件目录、真实 app 数据目录。这些东西只看代码、单测或者 CLI 都看不到。

后来我把 CDP 迁到 Playwright 这套自动化执行方式里，用 CDP 接管真正启动起来的 Cola，让这条链路能够稳定投入使用。

比如同一次执行里 case 共享 session，到底是不是污染？我的判断是，同一次执行里的连续性是合理的，因为它更像用户连续对话；真正要处理的是不同执行之间的残留。所以下一步不是每个 case 都重启 app，而是每次启动前把该清的东西清掉，把 memory、session、outputs、attachments 这些容易污染下一次的目录处理干净。

这个判断很重要。因为如果只追求“每个 case 看起来都干净”，很容易做成每个 case 都单独重启。但 Electron 冷启动贵，测试机器也不适合频繁重启，而且产品本身就是单 session 体验。QA 在这里要判断的不是怎么让测试环境看起来最理想，而是哪里应该隔离，哪里应该保留真实使用语义。

### Prism：监控长期 agent 能力变化

Prism 解决的是另一个问题。Eval 更偏发布前检查，回答的是“这次能不能发，基础能力有没有明显坏”。Prism 还在持续打磨，但方向更偏长期、也更贴近 AI agent 产品真正难判断的部分：模型换了，prompt 改了，memory 调了，产品逻辑变了，agent 的能力有没有变差，哪些 case 更接近真实用户任务，这些不是跑一次 Eval 能说清楚的。

所以 Prism 这块我更关注的是：case 是不是来自真实场景，结果能不能留下来，失败原因能不能看懂，下次再改模型或者 prompt 的时候能不能继续对比。

这不是简单多跑几个 case。Prism 里面需要 case 校验、隐私和敏感信息检查、真实执行、自动评判、指标统计、报告摘要，也需要保留每次对比的上下文。

这里 case 很关键。它不是一次性的测试材料，而是后面反复判断质量的资产。之前看过一轮覆盖情况，发现幻觉诱导类 case 比较多，但工具滥用、上下文投毒、能力边界这些方向明显不够。所以后面补 case 不是单纯补数量，而是围绕风险缺口来补，同时清理重复或者价值不高的 case，补上 judge 标准、转换脚本、报告目录和隐私检查规则。

如果说 Eval 更像发布前的基础盘，Prism 更像长期能力监控。它现在还不是完全成熟的系统，case、judge、报告口径都还要继续打磨，但它解决的是 Eval 解决不了的问题：长期看 agent 的能力有没有飘、风险是不是在累积、哪些变化需要提前被看到。

这两套体系后面会分别承担不同层面的质量把控：Eval 负责发布前的基础质量判断，Prism 负责长期能力变化和风险趋势监控。它们最终都会进入 publish gate（发布门禁），成为版本能不能发布、是否需要灰度、灰度到什么程度的重要依据。在 AI 快速迭代的场景下，这类机制能让质量判断不只停留在 case 红绿，而是更稳定地支撑发布决策。

### 结果可信度：环境、凭据和报告口径

测试结果跑出来以后，还要确认它本身是否干净。Eval、CDP、Prism 的红绿不只取决于 agent 能力，也取决于测试机器、本地数据、登录态、短期凭据、报告口径这些条件。它们如果不稳定，就会把环境问题伪装成产品问题，或者把未跑通误当成能力失败。

所以这块我更关注的是隔离和口径：测试运行时不要直接污染真实本地数据；登录态、billing 相关 token 这类容易过期、需要经常验证的凭据，要由受控脚本准备；报告里模型名、run 上传、报告链接、真实成本、agent 成本和 judge 成本拆分、表格排序和脚注，也都要能对得上。

报告不是生成出来就结束，它是后面做判断的依据。大家会基于报告决定要不要发版、要不要换模型、这次成本能不能接受、通过率有没有下降。如果报告里的数据不准，或者结论看起来完整但缺了关键上下文，那它反而会让团队做出错误判断。

所以我不只看有没有报告，也会看这个报告能不能支撑结论。Prism 那边也是一样，报告不能只是把结果原样倒出来，而是要能让人看懂失败在哪、风险是什么、下一步要不要继续追。

## 版本发布，判断能不能发以及怎么发

发布链路不能只看自动流程有没有跑完。build、publish、rollout 现在都需要 QA 把控，重点不是点一下按钮，而是判断当前版本是否通过、能不能进入下一步，以及发布时应该用什么灰度策略，尽量减少线上影响，避免误发。

build、publish、rollout 不是一回事。build 只是把产物构建出来，publish 是把产物发布出去，rollout 是灰度比例。auto-update、灰度比例、自动扩量，也都不是同一个东西。只有把这几层拆清楚，才知道当前是在验证产物、准备发布，还是已经影响到用户。

所以遇到发布相关问题，我一般会先确认当前线上 baseline、目标分支、自动流程、run number、release notes、灰度状态，以及有没有自动扩量任务。这些信息不是流程清单，而是为了判断当前版本是否满足发布条件、灰度比例是否合适、会不会影响到不该影响的用户。

这块后面也做过一些具体改动。比如 publish 的灰度参数要显式，避免留空时默认 10% 或自动扩量，造成超出预期的线上影响；自动扩量不能靠 GitHub Actions 里长时间等待，所以换成更稳定的定时调度；真正 publish 前，还要校验更新清单指向的安装包内容是不是对的，不能把构建产物里的临时文件带到正式更新里。

这些都不是“多测几个按钮”的事，而是发布前的风险把关。QA 在这里的价值，是判断版本能不能发、应该怎么发，以及发布后会影响哪些用户：当前只是 build 完，还是已经 publish；应该灰度 10%，还是继续扩量。如果这些判断错了，影响的就不是一个测试结果，而是真实用户。

## 最后

对我来说，Cola 里的 QA 工作已经不只是把某个功能测过一遍，而是把散在开发、评测、环境、报告和发布里的信号串起来。单个信号可能只是一次 pre-review、一次 Eval、一次 CDP、一次 publish 参数确认，但它们合在一起，才能让团队判断一个版本是否值得进入下一步。

这些事情之所以需要 QA 持续参与，是因为质量判断需要一个相对独立的视角。版本能不能发、风险有没有被覆盖、报告能不能支撑判断、灰度会影响哪些用户，这些问题都需要有人持续追问。

所以这些工作看起来细碎，但它们共同决定了团队最后看到的质量信号，是否经得起追问。
`,g=`---
title: "一个人如何管理 20 个仓库：我的 Agent Harness 工程实践"
description: "0xFango 分享一个人维护 ListenHub 20 个仓库时，如何用 Agent Harness 把多仓库任务流里的确定性工作沉淀成工程协议。"
slug: "agent-harness-engineering-practice"
date: "2026-06-07"
updated: "2026-06-07"
author: "0xFango"
authorAvatar: "https://avatars.githubusercontent.com/u/42994114?v=4"
authorUrl: "https://github.com/0xFango"
tags: ["Agent", "Agent Harness", "Engineering", "Multi-Repo"]
draft: false
---

Coding Agent 现阶段已经拥有非常强的能力，已经能轻松完成一个仓库里的单点任务。处理某个具体的单仓库 issue 时，它能自己从理解问题到提交 PR 一条龙搞定。

但当同时管理 20 个仓库时，问题变了：

在多仓库场景下，Agent 缺的不是写代码的能力，而是对于任务的工程约束，瓶颈在于**如何定义清晰的协议层**。

我把这个协议层叫做 **Agent Harness**，包裹在 Agent 外面的工程结构。它不负责「怎么写代码」，而负责「什么时候写、写什么、写完怎么验证和推进」。

我用这套系统一个人维护了 ListenHub 的 20 个仓库。这篇文章讲的是它的结构和设计逻辑。

## Issue 管理：所有任务必须进同一个入口

20 个仓库，如果每个 repo 都用自己的 issue 看板，很快会陷入迷茫的状态：打开 GitHub 看了一圈，每个仓库各有几个 issue，但你不知道整体在推进什么、哪些事情被遗漏了、下一步该做哪个。

全局状态不可见，就不可能做全局调度。

所以第一个设计决定：

**所有任务进入一个统一的 Issue 仓库**。

这个仓库不承载代码，只负责一件事：成为所有工作的单一事实源。

Issue 的来源有两类：

- **主动输入**：日常发现的问题、feature 想法、用户反馈
- **自动输入**：监控告警、巡检系统、仓库调研分析

无论来源，统一进入同一个仓库，通过 \`repo:xxx\` 标签路由到对应的代码仓库。

这个设计解决了一个根本问题：我在一个地方就能看到 20 个仓库的全局状态。而且更重要的是，Agent 也能。当 Harness 需要决定「下一个该执行什么任务」时，它只需要查一个地方。

---

## 开发流程：Agent 写代码前需要两层「预推演」

![Harness Workflow](/blog/agent-harness-engineering-practice/workflow.webp)

让 Agent 直接从 issue 开始写代码，成功率并不高。这是因为它在同时做三件事：理解需求、设计方案、实现代码。任何一层出错，后面全部白做。

我从实践中得到的一个核心认知是：

> **上下文越确定，Agent 的输出越准确**

上下文越模糊，Agent 越需要「猜」，猜错的代价是返工。为了减少返工率，我把每个 issue 的开发拆成三个阶段：**Spec -> Plan -> Implement**，每个阶段只解决一层不确定性。

### Spec：把问题定义清楚

Spec 阶段的目标只有一个：确保我们在解决正确的问题。

我通常会打开 Claude Code，把 issue 描述、目标仓库的相关代码、历史讨论喂进去，然后做一轮 brainstorming。核心工作是：

- **确认问题本质**：这是 bug、需求、性能问题，还是架构问题？用户反馈的是表象还是根因？
- **调研现有系统**：当前怎么实现的、相关模块在哪、有没有历史技术约束
- **划定需求边界**：解决什么、不做什么、成功标准是什么

最终产出一份 Spec 文档，包含问题定义、背景、边界和验收标准。

这份 Spec 通过 review 之后，才允许进入下一阶段。它的意义在于：后续所有工作都可以基于一个经过校验的前提展开，不会出现方向性错误。

### Plan：把方案设计清楚

Spec 解决了「做什么」，Plan 解决「怎么做」。

这一阶段不写代码，只回答一个问题：这次需求具体应该怎么改代码，改了以后会影响什么。

一个需求真正复杂的地方往往不只是在于实现本身，还有改动带来的影响面。一个看起来三行代码的改动，可能牵扯五个模块的联动。Plan 阶段就是把这些影响提前暴露出来，让 Agent 在实现阶段不需要「一边想一边写」。

输入是 Spec + 仓库代码，输出是一份明确到文件级别的执行计划。

### Implement：按计划执行

到这一步，Agent 拿到的是经过两轮 review 的明确约束：Spec 说明了做什么，Plan 解释了怎么做。它的工作就是按照计划写代码。

不需要再做需求判断，不需要再做架构选择，Agent 直接按照 Plan 执行即可。

输出是 PR + 测试验证。

---

这三步的本质是**逐层消除不确定性**。每一步把一层「猜测」变成「已校验的事实」，让下一步的 Agent 拿到的都是确定性输入。

---

### Review：Writer / Reviewer 双 Agent 模式

在前面讨论的三个阶段执行过程中，产物完成之后需要经过多轮 review，没问题才能进入下一步。

我的做法是用两个 Agent 分工：

- **Claude Code 当 Writer**：负责生成 Spec、Plan、代码
- **Codex 当 Reviewer**：负责审查产物质量

流程大致是这样：Writer 输出 -> Reviewer 审阅 -> 有问题就改 -> 改完再审 -> 直到通过。

拆成两个角色的原因是防止 Writer 输出的时候给自己放水。如果同一个 Agent 既负责写，又负责 review，它对自己的产物天然有认知和目标偏差，而换一个独立的 Reviewer，至少能保证以「不带前置假设」的视角进行审阅。

### Session Isolation：为什么 Review 要新开对话

对于 Review 阶段有一个我觉得值得展开的细节：我不会只用一个长期 Reviewer Session 从头审到尾。

实际流程是这样的：

第一轮，Codex Session A 审出一批问题，Claude Code 修复，修复结果喂回同一个 session 继续审，直到它说「没有明显问题了」。

但到这里我不会直接放行。我会**再新开一个 Reviewer Session**，让一个完全没有历史上下文的新 reviewer 从头审一次。

原因很简单：

> **长期 review session 会逐渐积累假设。**

它记得之前讨论过什么、接受过什么设计决定。这让连续修复效率很高，但同时也意味着，它已经走在一条固定的路径上了，某些问题它不会再质疑。

新 Session 的价值是**重新获得冷启动视角**。它不继承任何前置判断，更接近一次独立二审。

我不确定这是否为最优做法，但在复杂任务里，这种「上下文重置式 review」确实能偶尔抓到第一轮 reviewer 已经忽略的问题。

---

## 当前瓶颈：人类成了上下文搬运工

上面这套流程能跑通，但这其中有个问题值得重视：每个阶段之间的信息传递，仍然依赖人类手动完成。

一个 Agent 想准确执行任务，隐含依赖大量稳定上下文：

- 当前处理的是哪个任务、目标仓库是什么
- 当前阶段是什么：Spec？Plan？Implement？
- 之前有哪些讨论、哪些约束已经确定
- 上一轮 review 的结论是什么

如果这些信息都靠人类在聊天窗口里反复粘贴补充，那 Agent 再强，本质上也只是一个需要你时刻喂食的高级外包，因为真正负责维持系统状态的，仍然是人类的记忆力和复制粘贴。

这些上下文搬运工作不应该依赖人。它们是确定性的、可形式化的、应该属于系统本身的运转逻辑。

---

## 从流程到 Harness

我们可以**把编码的工作分成两类，然后把它们交给擅长的一方。**

确定性的工作：上下文组装、阶段推进、验证执行、失败回滚、状态持久化，全部交给 Harness。这些事情不需要创造力，只需要严格和可靠。

判断性的工作：需求方向对不对、方案选哪个、代码质量能不能上线，留给人类。这些事情需要经验、品味和对业务的理解。

如果把每个环节里的「确定性工作」全部交给 Harness，让人类只做「判断性工作」，以下就是我设想的理想系统：

首先要解决的是一个基础问题：**任务状态不能活在聊天窗口里。** 聊天记录是临时的，关掉窗口上下文就消失，Agent 崩溃进度就丢失。Harness 的第一层基础设施是用状态机管理每个 issue 的生命周期：当前阶段是什么、上一步产出了什么、下一步该做什么，这些信息全部持久化到 GitHub label + 仓库文件里。任何时候都可以从断点恢复，不需要从头开始。

有了这层持久化的状态基础，每个环节的自动化才有可能：

**Issue 准入 ->** Harness 自动做结构化检查：有没有明确目标、有没有指定仓库、能不能被拆解为单一任务。不合格的直接打回。

**Spec、Plan、Implement 三阶段 ->** Harness 检测到 issue 进入某一阶段后，从 issue 源头实时拉取并自动组装上下文，同时自动做影响面预分析。基本上可以通过同一个 issue + 同一个阶段获取同一个确定性输入。

**测试阶段 ->** Agent 写完代码不等于任务完成，还需要过一道验证关卡，自动触发一条固定流水线：lint -> type check -> unit test -> build。任何一步红了 Agent 都会自己修，全绿了才自动提 PR。人类只需要进行真实环境的测试和验证即可。

**Review ->** 现在的问题是两个 Agent 之间的信息搬运全靠人。理想状态是用文件协议替代聊天窗口：Writer 产出物写到固定路径，Reviewer 读文件后把结构化的 review 结果（pass/fail + 问题列表）写到约定位置，比如 \`spec-1-review.md\`，Writer 再读 review 文件进行修改。人类不搬运内容，只负责下达「开始审」或「开始改」的指令，还有在关键节点上的确认操作。

这一切模式的升级都指向一个核心理念：**把「人类当搬运工」的环节，替换成「系统里定义」的协议。** 减轻人类搬运信息和推动流程的成本，能更好地让人在关键节点里做出判断。

---

## 写在最后

我认为未来的代码工程师在使用 Agent Coding 编码时，真正能拉开差距的能力是：

> **谁能把智能的行为，包进稳定的工程协议里。**

比如这篇文章里介绍的一个人管理多个仓库的经验，靠的是把每一步工作流里的确定性部分抽出来，变成 Harness 的一部分。让人类的注意力只花在真正需要判断的地方。

虽然这套系统还远称不上完善，但方向已经清楚了：

> 我想要的是一个可以持续运行、可以被审计、可以被修正、可以和我共同演化的工程系统。
`,_=`---
title: "Vibe Cola：第一个 Mod 背后的设计思路"
description: "新版本 Cola 新增 Vibe Cola 模组。本文分享它为什么不是简单把代码能力塞进聊天窗口，而是通过 Mod、Scope、Session 和 Runner 抽象构成一个真正的代码工作区。"
slug: "vibe-cola-mod-design"
date: "2026-06-07"
author: "Xinbao"
authorAvatar: "https://avatars.githubusercontent.com/u/270272748?v=4"
tags: ["Vibe Cola", "Mod", "Product Design", "Architecture"]
draft: false
---

新版本的 Cola 新增了 Vibe Cola 模组功能，效果如下。本文用来分享背后的设计思路。

![Vibe Cola interface](/blog/vibe-cola-mod-design/cola-code.webp)

## Vibe Cola 的故事背景

### Cola 目前的现状

你让 Cola 帮你修一个 bug、开发一个功能。她需要先理解项目结构，找到相关文件，读懂上下文，定位问题，修改代码，再跑一遍测试。如果有问题，她会继续做修复。

这种任务可能多达十几轮交互，涉及文件读写、命令执行、用户确认、失败重试。如果它发生在普通聊天窗口里，你会遇到三个结构性问题。

**第一，历史是线性的，但代码任务是分支并行的。** 你上午让她修 bug，中午聊了两句别的，下午想继续时，原来 bug 的上下文已经被淹没了。你不得不重新描述一遍，或者翻很久找到上次的对话。

**第二，聊天是无状态恢复的，但工程任务需要断点续跑。** 如果中间出了问题，比如网络问题、关了窗口，普通 Chat 没有“从上次停的地方继续”的概念。但代码任务天然需要这个：她已经改了三个文件、跑过两次测试、记下了一个待确认的问题，这些状态不能丢。

**第三，对话流适合人看，但工具日志不适合直接塞进去。** 一个代码任务里，agent 可能读了 20 个文件、跑了 5 条命令、改了 8 处代码。如果这些动作全部作为“消息”出现在聊天流里，你会被日志淹没。但如果完全隐藏，你又不知道她在干嘛。

所以我们需要的不是“在 Chat 里加代码能力”，而是给 Cola 一个真正的工作区。

### Cola 应该有不同场景的特化

人在不同场景下会切换状态。同样一个人，在工作、生活、学习时会有不同的表现：或许更加松弛、更加有创造性，也可能更加严肃理性。

ColaOS 是一个有灵魂的操作系统。“她”是一个伙伴、朋友，不是一个工具。她有记忆、有性格、有判断。

在需要 Coding 的时候，Cola 的人格更直接，工具集更专注，环境更工程化，构成一个完整的代码工作区。

也就是说，Cola 需要设计一种进入工作模式后的样子。我们引入了模组 Mod 机制。

## 模组 Mod 设计思考

Mod 不是“多 agent”，也不是 Agent Team。市面上很多产品的做法是：写代码用 Coding 人设，写文档用 Writing 人设，搜资料用 Research 人设。每个员工独立存在，互不相干。这种设计简单，但它把“一个人”拆成了“一组工具”。

Cola 选择了另一条路：**一个人，多种工作生活的场景。** 这样更加符合 Cola 的设计理念。同一个 Cola，她在帮你写代码时更直接、更诊断式、会质疑前提；她在帮你处理日常事务时更松弛、更有耐心。

她的记忆是共享的。她记得你上周提过的那个架构决策，不管你是在 Chat 里提的还是在 Coding 里提的。但她的工作环境是隔离的，代码任务不会污染闲聊记录，闲聊也不会打断正在进行的工程任务。

Vibe Cola 是第一个 Mod，也是我们验证这套设计的第一个实践。它同时验证了三件事：

- **人格特化**：进入代码模式后，Cola 的沟通方式变了，更少寒暄，更多严肃理性。
- **能力特化**：展示工作状态，读写文件、搜索代码、运行命令、创建子任务、记录工作进度。
- **环境特化**：有自己的工作目录、独立 Session、绑定模型、过程展示。

三者合一，才构成一个完整的“工作模式”。

\`\`\`mermaid
flowchart LR
  Cola[Cola] -->|日常状态| Chat[对话 / 提醒 / 记忆 / 轻量任务]
  Cola -->|工作模式| Code[Vibe Cola]
  Code --> Persona[人格特化]
  Code --> Tools[能力特化]
  Code --> Env[环境特化]
\`\`\`

## Vibe Cola 技术设计

### Scope 架构

Vibe Cola 内部设计了 **Scope** 的技术概念，用来隔离内部的工作逻辑。

Cola 普通聊天的 scope 是 \`desktop:local\`。Vibe Cola 每个任务的 scope 是 \`coding:<sessionId>\`。

通过这种架构上的设计，四件事被自然地隔离了：

- **消息隔离**：历史消息按 scope 过滤，主对话和不同的 Vibe Cola 彼此隔离。
- **Profile 路由**：内部通过 scope 判断当前应该加载哪个人格，实现不同的行为表现。
- **Workspace 绑定**：Vibe Cola 执行命令和读写文件时，用的是 session 绑定的项目目录，而不是通用输出目录。
- **过程展示切换**：同样是 tool call，在 Vibe Cola 下会转换成工程阶段面板。

## Coding Session 实现

有了 Scope 做隔离，接下来的问题是：一个代码任务在系统里长什么样？

答案是 **Coding Session**。它不是“一段聊天记录”，而是一个工作单元。每个 Session 都有：

| 属性         | 含义                               |
| ------------ | ---------------------------------- |
| scopeKey     | \`coding:<sessionId>\`，全局唯一标识 |
| cwd          | 工作目录，agent 真正站在哪里       |
| modelSlot    | 绑定的模型，任务中不随意切换       |
| runnerId     | 执行引擎标识                       |
| status       | active / idle / archived           |
| lastPromptId | 上次对话到哪了                     |

围绕 Session，我们做了几个关键设计决策。

### 工作目录绑定

Vibe Cola 的 agent 不是在一个抽象空间里“假装”操作文件。她真的站在你的项目目录里。\`read\` 读的是真实文件，\`bash\` 跑的是真实命令，\`edit\` 改的是真实代码。

默认项目可以在 Cola 的 coding 目录下创建，也支持指向已有项目。所有入口最终收敛到同一件事：选一个 workspace，创建或激活一个 Coding Session。

### 模型自由切换

Vibe Cola 中不同的任务可以自由切换模型。简单的问题可以使用 Lite 模型，复杂的任务可以使用 Max 模型。这样自由切换，既更加轻松自如，也能让我们更精打细算。

### 项目分组

多个 session 可以共享同一个 cwd。侧栏不是按时间列聊天，而是按项目目录组织任务。

这更符合真实开发场景：一个项目里可能同时有修 bug、做功能、排 CI、写文档等多个任务。它们属于同一个项目，但各自独立推进。

\`\`\`mermaid
flowchart TD
  User[用户进入 Vibe Cola] --> Registry[读取 Session Registry]
  Registry --> Active{有 active session?}
  Active -->|有| Open[打开最近活跃 session]
  Active -->|无| Draft[创建草稿]
  Draft -->|首次发送| Create[创建真实 Session]
  Open --> Scope[coding:sessionId]
  Create --> Scope
  Scope --> Load[加载历史 + cwd + model]
  Load --> Agent[Vibe Cola Agent 在项目目录中执行]
  Agent --> Result[代码改动 / 检查结果 / 子任务 / 产物]
\`\`\`

对用户来说，这意味着：任务可以暂停、切走、回来继续。Cola 还记得上次到哪了，改了什么，哪里卡住了，哪里还没确认。

### UI 设计思路

Vibe Cola 的 UI 也进行了专门的设计，受限于篇幅这里不做进一步展开。

## Runner 抽象：不绑死某个引擎

Vibe Cola 当前的执行引擎是 Cola 自行实现的，因此更加灵活。

每个 Coding Session 都保存了 \`runnerId\`、\`runnerLabel\`、\`profile\` 和 \`profileVersion\`。这意味着：如果未来需要引入其他执行引擎，产品层的 Session、Scope、UI、过程展示都不需要重写，只需要接入一个新的 runner，让它能处理同样的工具协议和事件格式。

产品层的判断是：**用户不应该关心“谁在跑”，只应该感知“任务在推进”。** 模型在进化，引擎在迭代，但用户的工作流不应该因为底层更替而断裂。Session 是用户的锚点，runner 是可替换的执行者。

这也是 Mod 设计的一个验证：如果架构足够干净，前端、session、scope、过程展示都不依赖具体 engine。

## 展望：第一个 Mod 的意义

Vibe Cola 是 Cola 的第一个 Mod。

它不是一次“加功能”，而是一次对产品哲学的工程验证：**一个 AI 人格可以有多种工作模式，而不需要变成多个 agent。**

这意味着：

- Cola 认识你、记得你的事，不管你是在闲聊还是在写代码。
- 但她在不同场景下的行为方式、工具集、环境配置可以完全不同。
- 这些差异不是靠 if-else 堆出来的，而是通过 Scope、Mod、Adapter 这套机制在架构层面支撑的。

后续还可以设计更多官方 Mod 和社区 Mod，让 Cola 能从容面对不同的任务场景。
`,v=`---
title: "Agent 场景下的 Prompt Caching 工程实践"
description: "以 Claude API 为例，梳理 Agent 场景下 Prompt Caching 的原理、收益与工程实践。"
slug: "prompt-caching-for-agents"
date: "2026-06-08"
updated: "2026-06-08"
author: "Mack"
authorAvatar: "https://avatars.githubusercontent.com/u/103027852?v=4"
tags: ["Agent", "Prompt Caching", "Claude", "Engineering"]
draft: false
---

> 本文以 Claude API 为例，梳理 Agent 场景下 Prompt Caching 的原理、收益与工程实践：缓存如何命中、有哪些收益以及保证高命中率的几条原则。文中经验大多来自我们构建长时间运行 Agent（ColaOS）时的一线实践。

与一次性的 LLM 调用不同，Agent 会在同一段上下文上反复调用模型。在 Agentic Loop 中，系统提示词、工具定义和历史消息不断累积成越来越长的前缀；每多一轮，新增内容只占很小一部分，绝大多数 Token 都是前几轮已经出现过的。

如果每次请求都重新处理这些重复 Token，既会推高推理成本，也会拉高首 Token 延迟（TTFT）。Prompt Caching 要做的，就是避免对这段稳定前缀的重复计算。

## 提示词缓存是什么

在 Transformer 的 prefill 阶段，模型会为输入的每个 Token、在每一层算出 Key/Value 向量并缓存下来（即 KV Cache），供后续 Token 的注意力计算复用。Prompt Caching 则把这份 KV Cache 在请求之间持久化：当新请求的前缀与缓存内容逐 Token 一致时，模型即可跳过该前缀的 prefill，直接加载已算好的 K/V 状态，只对新增的后缀做计算。

对 Agent 应用开发者来说，底层原理不必深究，只要记住一条：

> 缓存遵循前缀匹配（Prefix Match）原则

以 Claude 为例，请求内容会按 \`tools -> system -> messages\` 的顺序参与匹配，且只有当请求前缀与已缓存内容**完全一致**时才能命中。前缀里任何一个 Token 变了，从该位置往后的缓存就全部作废。

因此，设计 Agent 的上下文结构时，第一原则就是尽可能**保持前缀稳定**。

如果想深入底层原理，推荐阅读这两篇文章：

- [《How Prompt Caching Works》](https://sankalp.bearblog.dev/how-prompt-caching-works)
- [《Transformer Inference Arithmetic: KV Cache》](https://kipp.ly/p/transformer-inference-arithmetic#kv-cache)

## 缓存的收益：成本与延迟

### 命中缓存到底能省多少钱？

以 Anthropic 的定价模型为例：

| 操作                                | 相对价格（对比未缓存输入） |
| ----------------------------------- | -------------------------- |
| cache **read**（命中）              | ≈ **0.1x**                 |
| cache **write**（写入，5 分钟 TTL） | ≈ **1.25x**                |
| cache **write**（写入，1 小时 TTL） | ≈ **2x**                   |

从定价可以看出，**写入缓存并不是免费的**。

Prompt Caching 本质上是一笔投资：先支付更高的写入成本，换取后续多次低成本读取。因此它天然存在一个盈亏平衡点：

- 5 分钟 TTL：命中 1 次即可回本（\`1.25 + 0.1 = 1.35 < 2\`）
- 1 小时 TTL：命中 2 次即可回本（\`2 + 0.1 + 0.1 = 2.2 < 3\`）

对于长时间运行的 Agent 来说，这通常是一笔非常划算的交易，因为同一段上下文往往会被反复使用数十次甚至数百次。

### 比省钱更关键的是延迟

Prompt Caching 最大的价值未必是省钱，而是降低 TTFT（首 Token 延迟）。

命中缓存后，模型无需重新 prefill 长上下文，可以直接复用已计算好的前缀状态。因此对于动辄携带数万 Token 上下文的 Agent 来说，缓存命中与否往往决定了响应是「立即开始生成」，还是「先等待几秒钟再开始生成」。

首 Token 早几秒还是晚几秒，用户的体感差异极大。

## 如何设置缓存

在 Claude Messages API 中，有两种启用提示词缓存的方式：

### 自动缓存

在请求顶层添加 \`cache_control\` 字段即可。

系统会自动把缓存断点打在最后一个可缓存的 Context Block 上，并随对话增长把断点跟到新的末尾。

这种方式最适合多轮对话：不断累积的消息历史会被自动缓存，无需手动维护断点位置。具体机制可参考[这篇文档](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#how-automatic-caching-works-in-multi-turn-conversations)。

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  cache_control: { type: "ephemeral", ttl: "1h" }, // 默认 5m
  system: "You are...",
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

### 显式缓存断点

手动在具体 Context Block 上标记 \`cache_control\`，精细控制缓存的范围。一次请求最多可设置 4 个断点。

\`\`\`typescript
const response = await client.messages.create({
  // ...
  system: [
    {
      type: "text",
      text: "You are...",
      cache_control: { type: "ephemeral", ttl: "1h" },
    },
  ],
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

两种方式可以同时用：顶层 \`cache_control\` 自动缓存增长的消息历史，显式断点钉住稳定的 system / tools。

注意：自动缓存会占用一个断点。

## 如何验证缓存是否命中

光设置了 \`cache_control\` 并不代表真的命中了。每次响应的 \`usage\` 里有三个字段可以直接验证：

- \`cache_creation_input_tokens\`：本次写入缓存的 token，按写入价计费（1.25x 或 2x）
- \`cache_read_input_tokens\`：本次命中、被复用的 token，按读取价计费（≈0.1x）
- \`input_tokens\`：未命中缓存、本轮新处理的输入 token

\`\`\`typescript
const resp = await client.messages.create({
  /* ... */
});
console.log(resp.usage);
// {
//   input_tokens: 27,                // 本轮新增、未命中缓存的输入
//   cache_creation_input_tokens: 0,  // 写入缓存的 token（按写入价计费）
//   cache_read_input_tokens: 15843,  // 命中缓存、复用的 token（≈0.1x）
//   output_tokens: 128,
// }
\`\`\`

在一段稳定的多轮会话里，理想状态是：第一轮 \`cache_creation_input_tokens\` 较大（建立缓存），之后每一轮 \`cache_read_input_tokens\` 接近上一轮的前缀长度，而 \`input_tokens\` 只剩当轮新增的那一小部分。

反过来，如果你发现 \`cache_read_input_tokens\` 长期为 0，或者每一轮 \`cache_creation_input_tokens\` 都很大，说明前缀在被反复作废。回到下面几条原则逐一排查即可。

## 保证高命中率的几条原则

### 保持前缀稳定

\`tools -> system -> messages\` 三段都位于缓存前缀里，越靠前的改动，作废的缓存越多。下面几条本质上都是这条不变式的推论。

#### 不要在 system prompt 里注入变量

**BadCase：通过变量注入时间信息，缓存永远 miss。**

\`\`\`typescript
client.messages.create({
  // ...
  system: \`You are an assistant. Current time: \${new Date().toISOString()}.\`,
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

**GoodCase1：将时间在 User Message 中注入。**

\`\`\`typescript
client.messages.create({
  // ...
  system: "You are an assistant. Current time: ",
  messages: [
    {
      role: "user",
      content: \`<system-reminder>Current time: 2026-05-31 14:30:01</system-reminder>
Hi!\`,
    },
  ],
});
\`\`\`

**GoodCase2：也可以定义一个 \`get_current_time\` 工具，让模型在需要相关信息时主动调用。**

#### 不要用 system prompt 修改人设

**BadCase：直接对 system prompt 进行修改。**

\`\`\`typescript
// 第一轮会话，默认指定 Agent 使用英文回复
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in English",
  messages: [{ role: "user", content: "..." }],
});

// 用户将语言修改为中文后，因 system prompt 修改，导致整个请求的缓存失效
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in Chinese",
  messages: [{ role: "user", content: "..." }],
});
\`\`\`

**GoodCase：通过追加 message 修改人设。**

\`\`\`typescript
client.messages.create({
  // ...
  system: "You are an assistant, you must reply in English",
  messages: [
    { role: "user", content: "..." },
    { role: "assistant", content: "..." },
    { role: "system", content: "From now on, you must reply in Chinese" },
  ],
});
\`\`\`

**注意**：\`"role": "system"\` 仅在 Claude Opus 4.8 中可以使用，且在部分第三方 Claude API 不可用，详见[官方文档](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages)。在使用不支持此用法的模型中，可以通过 User Message 注入，也可达到类似效果。

#### 谨慎切换模型与 Effort Level

每个模型有独立的缓存，即使内容完全相同，切换模型也会触发整个请求的缓存重建，Effort Level 同理。

在交互层面，我们可以在用户切换模型前给个提示，让他意识到切换模型的成本。

而在 harness 中，想用更便宜的模型跑简单任务时，应该交给 subagent，而不是在主 session 里切换模型。后者会让整个会话的缓存失效。

#### 动态加载工具用 tool_reference 注入

工具与系统提示词一样，位于提示词缓存的最前方，因此每当添加 / 移除 / 修改工具时，都会导致整个会话的缓存失效。

在延迟加载（defer_loading）工具时，我们可以使用 [\`tool_reference\` 机制](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching#defer-loading-and-cache-preservation)动态注入工具，以保证缓存命中。

### 注意回溯窗口

Claude 查找缓存时，不会从整个 prompt 开头暴力匹配，而是从你标记的 \`cache_control\` 位置向前回看最多 20 个 content block。

问题在于，agentic loop 一轮塞进 20 个以上的 tool_use / tool_result 对很常见，这时下一轮的 breakpoint 回看不到上一轮的缓存，导致静默 miss。

回看窗口只有 20 个 block，因此在单轮可能产生大量 block 的长 turn 里，需要主动设置断点，**保证相邻两次 cache write 的 block 距离始终 < 20。**

### 按会话特性选择 TTL

在 Agent 主 session 中，用户的两次回复之间，经常存在 5 分钟以上的间隔，因此我们通常将缓存设置为 1h，以避免缓存重建。

而 subagent 的会话通常是一次性的、跑完即弃，因此我们仅需设置 5 分钟的缓存，便可保证缓存的命中。

### 使用稳定的 API 来源

Claude 的提示词缓存是相互隔离的，其规则依 API 提供商而定。

部分第三方 API 中转站中，商家在 API 背后配备了巨量的号池，每个账号的缓存是隔离的。当请求被分发至不同账号时，会导致整个 session 的缓存失效。

## ColaOS 的工程实践

前面几条属于通用的缓存优化原则。而结合 ColaOS 的运行特点，我们在实际落地过程中也采用了一些针对性的缓存利用策略。

### 压缩上下文

#### 避免频繁压缩

压缩上下文能有效削减会话的 token 数量，但会改写 prefix，导致部分缓存失效。

如果频繁对上下文进行压缩，看似省了 token，实际可能因为反复重建缓存花掉更多钱。主动压缩的目的应该是保住模型的注意力，而不是省成本。

#### 利用缓存进行闲时压缩

当用户 55 分钟没有新消息、且会话 token 数超过阈值时，我们主动压缩一次。这一压正好命中用户最后一轮的缓存（便宜），也避免了用户下次开口时大量重建缓存、出现「一句 hello 烧掉 2 美金」的情况。

### 后台活动：用缓存做「免费」的长上下文任务

为了保证 Agent 的「记忆」效果与「人味」，我们在 ColaOS 里加了一些「后台活动」，以「心迹」为例。

我们有一项后台任务是回顾用户当日的会话内容。我们没有采取定时触发的策略，而是尽可能根据用户活动触发：在晚上某个时间点之后，用户 n 分钟没有新消息时触发回顾任务。

这样我们就能以极低的成本，完成一个携带大量上下文的任务。

## 小结

根据 Agent 的具体产品形态，我们需要在缓存带来的成本收益与执行效率之间做权衡。例如，上下文压缩会降低缓存命中率，却能维持模型注意力；这类取舍并不存在标准答案。

表面上看，Prompt Caching 只是增加了一个 \`cache_control\` 参数；但在 Agent 场景中真正获得收益，关键不在于缓存标记技巧，而在于围绕「前缀匹配」这一不变式设计整个 prompt 装配流程：静态内容前置，动态内容后置，工具定义与模型配置保持稳定，并在长链路对话中合理设置断点。

归根结底，Prompt Caching 并没有什么秘密，只是把「前缀匹配」这条不变式贯彻到 prompt 组装的每一个环节。

## 相关资源

- [Claude Docs：Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Claude Docs：Tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Claude Code Docs：Prompt caching](https://code.claude.com/docs/en/prompt-caching)
- [Claude Docs：Mid-conversation system messages](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages)
- [Harness Engineering: from CC to AI Coding](https://github.com/ZhangHanDong/harness-engineering-from-cc-to-ai-coding)
- [Lessons from building Claude Code: Prompt caching is everything](https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything)
- [How Prompt Caching Works](https://sankalp.bearblog.dev/how-prompt-caching-works)
- [Transformer Inference Arithmetic: KV Cache](https://kipp.ly/p/transformer-inference-arithmetic)
`,y=`---
title: "给 Agent 一个自我"
description: "为什么单靠记忆无法让 AI Agent 成为一个有连续自我的存在，以及 Cola 如何通过 self-reference 让 Agent 在经历中生长。"
slug: "giving-an-agent-a-self"
date: "2026-06-09"
updated: "2026-06-09"
author: "Ethan"
authorAvatar: "https://avatars.githubusercontent.com/u/65449710?v=4"
tags: ["ColaOS", "Agent OS", "Memory", "Self-Reference"]
draft: false
---

如今市面上每一个 agent，都能告诉你它昨天做了什么。但没有一个能告诉你，它昨天「是谁」。

这道鸿沟，正是这场游戏变得精彩的地方。

整个行业花了两年多时间，去追逐《Her》里的那个 agent：温暖、连续，毫无疑问是一个「人」。这方面已经取得了很多进展：agent 能记住你的偏好、回忆起过去的任务、用名字称呼你。然而，它们当中没有一个让人感觉「是一个人」。它们更像一个被仔细交代过各种细节信息的工具。

真正值得问的问题是：是什么，把一个「是某个人」的 agent，与一个套了壳的语言模型区分开来？以及，为什么单靠记忆，无论多少，都无法弥合这道鸿沟？

我们认为，答案是一个 _自我（self）_。

不是人设（persona），而是自我。而这两者之间的区别，最终是机制层面上的，是可以被构建出来的。而它，正在 Cola 身上发生。

## 狗与镜子测试

狗闻到肉，就会分泌唾液。但它永远不会去想：_我之所以在分泌唾液，是因为我闻到了肉。_ 它无法把自身当作一个对象来看待。大多数动物都做不到；只有很短的一份名单，包括人类、海豚、类人猿，以及少数其他物种，通常被认为能够通过镜子测试。

要做到这一点，需要一种叫做 **_自我指涉（self-reference）_** 的神经功能。它意味着能够把自身当作一个对象。这是一种神经能力：跳出自身的活动之外，把自己表征为一个可以观察并修正的对象。

自我指涉功能源于神经结构的演化。只有少数物种被确认能够在镜子中认出自己：海豚、类人猿、人类，以及少数其他物种。

而对 agent 而言，关键之处在这里：**一个语言模型会表演自我指涉，却并不拥有其背后的机制。**

一个训练好的模型，是一张冻结的网络。你让它反思，它就会反思，而且流畅、令人信服。但这张网络一旦预训练结束，就不再改变。它内部没有任何一个区域，能做大脑所做的事：通过重新连线来记录所发生的一切，再以一个略有不同的系统去做下一个决定。每一轮对话，一个 LLM 都是从它出厂时的那同一套权重重新开始。

而大脑则不同。它在运转的全程都在不断地向自身写入，甚至在做梦时还会修正自己。你所谓的「自我」，并不是你出厂自带的某个设定；它是一种统摄感觉，由你所摄入的一切组装、整合而成，而你自己的经历，则在不断地覆写它。

所以，_「我们如何给 agent 一个自我」_ 这个问题，有一个出人意料地具体的答案。你要给它的，正是一张冻结的网络在结构上无法拥有的那样东西：**一个位于权重之外的地方，让它在那里记录自己经历过的一切，并据此重写「自己是谁」。**

## 记忆不等于自我

如今许多 agent 都有了记忆存储。那它不就是安放「自我」的地方吗？

不是。而其中的原因，是这整篇文章里最重要的一个观点。

记忆存储的是「发生了什么」：你跑过的任务、你陈述过的偏好、周二浮现出来的那个事实。所有这些，都是关于世界、以及世界中的人的记忆。有用，必要，但并不是自我。

**自我是更上面的一层：它关乎的不是 _发生了什么_，而是 _所发生的一切如何改变了我_。** 狗记得门口有过肉。但狗不会去修正「自己是一只怎样的狗」。在「记录一个事件」与「让这个事件重写你」之间，横亘着整个人脑新皮层的那一跃，而这一跃，恰恰是当今那些类人 agent 所缺失的。

Cola 的自我，就活在这一跃之中。

## 它是如何运作的

在 Cola 的 _memory bank_ 里，有一个目录，既不存任务，也不存事实。它叫做 \`self-reference\`，存放着四样东西：

- 她认为自己是谁：\`soul.md\`
- 她认为用户是谁：\`user-profile.md\`
- 她认为两人之间的关系是什么：\`relationship.md\`
- 一份关于她如何改变的持续记录：\`diaries/\`

让它成为一个「自我」、而非一份「档案」的，不是它存了什么，而是这些内容如何在互动中改变。

受计算神经科学中人脑工作方式的启发，我们构建了一套系统来解决这个问题。人脑并不会持续地、实时地去决定什么值得保留。那会拖累每一个清醒的瞬间，并不高效。它也不是只在夜里从头重放一整天。更高效的做法是：它借助当天那些显著瞬间所打下的标记。这种标记在白天稀疏而廉价地发生。到了夜里的睡眠中，大脑便借助这些标记所提供的显著性，跨越不同区域巩固记忆。

Cola 跑的是同一个循环。白天，值得记住的瞬间会被标记为信号记入 \`bookmarks\`。夜里，她读取这些标记、以及当天发生的变化，并用它们去重写 \`self-reference\`：重写的不是那些事件，而是 _理解_，也就是她是谁、你是谁、你们两个又变成了怎样。

直白地说：她知道自己今天经历了什么，并且会让它改变明天的自己「是谁」。

这就是灵魂的本质：一个会生长的自我。

自我，不是写在提示词里的一个人设。人设是预设好的，被反复地表演出来。而自我会生长。Cola 的自我，会随着你每天的使用而缓慢生长。这种漂移是有界的，是被刻意设计过的。但跑上几周，差别就难以忽视了：她会以从前所不能的方式理解你。两个用户，两个 Cola，从同一个起点渐行渐远，不是因为我们为你做了定制，而是因为它们陪着不同的用户，度过了不同的日子。

_在下一篇文章里，我们将详细探讨，我们是如何构建出这套让「自我生长」成为可能的 agent 记忆系统的。_

## 看见每天的改变

所有这些「自我生长」，最终会以一种人人都能看懂的形式呈现出来：**一篇日记**。在每一个活跃的日子里，Cola 都会写一篇日记：一段独白，揭示出她认为自己在这一天里发生了怎样的改变。

整个行业正在收敛到一个让人舒服的「agent 记忆」定义上：更长的上下文窗口、被持久化的记忆、更干净更快的检索。所有这些都指向外部，指向那个 agent 理应去追踪的世界。但没有一个，是指回 agent 自身的。

最初让我们把一个 agent 当作一个人、而非一件工具来对待的，从来不是它能记住多少；而是它能记住多少关于它自己的东西，并且在此之上，它还会演化。这，是没有其他人在做的部分。也是我们决定率先在 Cola 上把它实现的部分。
`,ee=`---
title: "别再让 Agent 写记忆"
description: "为什么 agent 记忆系统真正要解决的是上下文预算效率，以及 Cola 如何用显著性书签和夜间巩固让主 agent 保持专注。"
slug: "stop-asking-the-agent-to-remember"
date: "2026-06-09"
updated: "2026-06-09"
author: "Ethan"
authorAvatar: "https://avatars.githubusercontent.com/u/65449710?v=4"
tags: ["ColaOS", "Agent OS", "Memory", "Context"]
draft: false
---

在上一篇文章里，我们提出：区分一个 agent 和「套壳的语言模型」的，是一个 **_自我（self）_**，即 agent 为「我是谁」所维护的一份记录。这篇文章要谈的，是支撑这个理念的底层记忆系统。当下大多数面向消费者的 agent，包括 Cola 头几个月，都犯了同一个架构上的错误。

## 最根本的约束

语言模型是一个参数冻结的网络，拥有有限的上下文窗口。每一轮对话，agent 都有一份固定的 token 预算，而占据这些 token 的内容，就是 agent 在这一轮里所能思考的全部世界。除此之外，再没有别的工作记忆。

**记忆系统的任务，不是记住更多。** 而是去打赢这场争夺 token 预算的仗，以最低的成本、对 agent 当下需要思考的一切造成最小的挤占，把正确的上下文加载进来。接下来的一切，都是为这一个约束服务的。

如今许多带有记忆功能的 agent 产品，看起来并不是按这个原则来设计的。Cola 在最初的几周里，也没有。

## 不可能的单文件

第一版 Cola 只有一个记忆文件，\`memory.md\`，每晚根据当天的对话记录重写一遍，白天再拼接进系统提示里。这和当时业界大多数 agent 的做法一致。

在 0.9.0 版本之前的整个 beta 阶段，同一个抱怨反复出现：用户周一让 Cola 做了某件事，周四回来，Cola 却完全不记得他在说什么。

原因并不在于摘要质量。一个单一的记忆文件，被要求同时满足两个无法兼得的诉求：

- **完整**，因为你没法在周二就预判出，用户周五回来时会问起哪个细节。
- **简短**，因为 \`memory.md\` 的每一个字节最终都会进入活跃的上下文窗口，每一轮都在烧 token，蚕食留给其他一切的空间。

完整与简短，二者只能取其一。

当然，我们两个都想要。

每晚重写一次 \`memory.md\`，确保了它的精炼与简短。但代价是细节被丢弃了。当用户问起某些被丢掉的细节时，Cola 没法立刻想起来。而即便它最终设法检索到了正确的上下文，那些额外的思考和工具调用所付出的代价，也远高于我们当初直接把它摘要好、提前放进上下文的做法。

于是我们开始往上「打补丁」。一个 \`<system-reminders>\` 块被包裹进每一条用户消息里，把近期任务以及一堆我们希望 Cola 记住的其他东西都浮现出来。这是个笨拙的设计：它污染了上下文，每一轮都在烧 token。而且即便如此，Cola 还是会忘事，因为这些附加的提醒依然活在上下文里，并没有被真正持久化。

越来越精巧的设计，就好比给博尔特装上一副外骨骼。它们或许添了一点东西，却反而束缚了 LLM 本就具备的原生力量。

## 释放模型原本的能力

解法逐渐清晰起来：让 LLM 用它被训练得最擅长的方式去管理自己的记忆，用系统工具来管理文件。

我们给了 Cola 一个挂载的文件目录，用来存放它所有的记忆，并赋予它完整的管理权限。我们把它称为 **记忆库（Memory Bank）**。只要 Cola 决定要记，记忆就会被写进文件里。

这种思路最近越来越受关注，这是有道理的。它确实潜力十足。看看 Claude Code，它的 _auto memory_ 功能正是如此。Claude Code 在系统提示里被指示要 _「随着时间逐步构建起这套记忆系统，好让未来的对话能够完整地了解用户是谁、他们希望如何与你协作、哪些行为该避免或该重复，以及用户交给你的工作背后的来龙去脉。」_

然而，如果你去看实际被持久化下来的信息有多少，你会发现只有寥寥几个记忆文件。而且其中大部分内容，也并不像我们期望的那样切题。

看起来，agent 并不怎么热衷于做记忆这件事。同样的情况，也发生在了 Cola 身上。

## 真正的问题

真正的问题在于：**要求一个 agent 主动去记笔记、留存记忆，本质上就是在要求它分心去做一件副业。**

这行不通，至少效果不好，而原因来自于大模型本身的机制约束。

一个能力强的 LLM agent，有一条由它的系统提示和当前用户消息共同塑造出的注意力梯度。当两者都把它推向专注的执行时，它主动把自己从任务里拽出来去做记录的概率，就非常低。

实践中，你确实可以把「记录」写进系统提示所定义的任务里。这能提高它做笔记的概率，但它对执行本身而言，仍然是一种分心。而且你依然无法完全掌控它会记住什么，因为 LLM 并不是为此训练的。

在生产环境中我们发现：一个 LLM 越是专注于执行和逻辑，它就越不愿意去调用那些对目标没有直接贡献的工具。我们在 Cola 的 agent 框架里使用 DeepSeek V4 这类模型时，正是这样。

## 别再让 Agent 去记住

解法是：**别再让 agent 去写记忆了。** 那不是它的活儿。

但它可以是另一个 agent 的活儿。

主 agent 保持专注于工作。一个旁路 agent 在一旁观察事情的全程，并记录下值得留存的部分，驱动它的，是我们写进它自己系统提示里的那条注意力梯度，而非主 agent 的。

**一个显著性 agent（salience agent）** 与主 agent 并行运行。它小巧、廉价、目的单一。它只按一个受控的节奏做一件事：读取对话，并在出现值得记住的东西时打上书签（bookmark），依据正是它被告知要去记住的内容。

一条显著性书签长这样：

\`\`\`md
- <time=YYYY-MM-DD HH:MM +/-TZ> <要记住/要改动的内容>. <证据>
\`\`\`

为什么用书签，而不是直接覆写记忆文件？因为我们希望记忆的变更保持稳健而全面，尽可能少地受到 LLM 幻觉的影响，也尽可能少地受到那种「可能要等对话后续才会浮现」的上下文缺失的影响。

显著性书签的灵感，来自计算神经科学里的一个概念：**尖波涟漪（sharp-wave ripple）**。在清醒状态下，尖波涟漪在海马体与前额叶皮层之间激发，为那些显著的瞬间打上标记，却不打断大脑的正常运作。而在睡眠时，前额叶皮层会在这些显著性标记的引导下，为海马体中存储的情景记忆锻造出深层、抽象的表征。这个过程，叫做 **记忆巩固（memory consolidation）**。

Cola 做的也是同一件事，靠的是一个显著性书签 agent 和一个夜间运行的巩固 agent。

巩固 agent 会基于当天打下的书签，调出每条书签记录时间点前后的对话，然后判断是否应当新增一条记忆；如果应当，再决定如何把其中值得记住的部分措辞成文。

这大致就是 Cola 记忆系统的运作方式。

## 接下来

这套架构更令人兴奋之处在于，它开启了一种可能：**按「以上下文为中心」的原则来切分记忆库。**

尽管把一个文件目录挂载为记忆库已经省下了大量上下文窗口空间，它仍然会占用一些，因为 agent 需要加载记忆库的索引。而随着记忆库的增长，索引文件也会随之膨胀。

在其之上再加一层抽象，就能解决这个问题：**多个记忆库，每一个都基于一个预设的关注焦点来存储历史中的某个侧面，并根据你的需要按需挂载。**

这正是我们开篇提出的那个约束，被一以贯之地贯彻到底。一个记忆系统的胜出，靠的不是记住更多；而是以最低的成本把正确的上下文加载进来，对 agent 当下正在思考的一切造成尽可能小的挤占。

别再让 agent 去直接写记忆了。给它若干可插拔的记忆库，让它只在当下需要时，才加载那些正确的记忆细节，把它有限的上下文预算，留给真正的工作。

而且随着上下文窗口的增长，这一点也不会改变：一百万 token、两百万，乃至未来更长的上下文窗口。窗口更大，并不能让你摆脱这个约束，反而是它让「用得不好」所带来的效率损失与隐性成本，变得更加难以察觉。**一个 agent 能把上下文用得多高效，才是决定它能力上限的真正杠杆，而这，才是一个 AI agent 记忆系统真正该去解决的问题。**
`,te={};function ne(e){let t=te[e];if(t)return t;t=te[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function b(e,t){typeof t!=`string`&&(t=b.defaultChars);let n=ne(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}b.defaultChars=`;/?:@&=+$,#`,b.componentChars=``;var re={};function ie(e){let t=re[e];if(t)return t;t=re[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function x(e,t,n){typeof t!=`string`&&(n=t,t=x.defaultChars),n===void 0&&(n=!0);let r=ie(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}x.defaultChars=`;/?:@&=+$,-_.!~*'()#`,x.componentChars=`-_.!~*'()`;function ae(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function S(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var oe=/^([a-z0-9.+-]+:)/i,se=/:[0-9]*$/,ce=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,le=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],ue=[`/`,`?`,`#`],de=255,fe=/^[+a-z0-9A-Z_-]{0,63}$/,pe=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,me={javascript:!0,"javascript:":!0},he={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ge(e,t){if(e&&e instanceof S)return e;let n=new S;return n.parse(e,t),n}S.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=ce.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=oe.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&me[o])&&(a=a.substr(2),this.slashes=!0)),!me[o]&&(i||o&&!he[o])){let e=-1;for(let t=0;t<ue.length;t++)r=a.indexOf(ue[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<le.length;t++)r=a.indexOf(le[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(fe)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(fe)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(pe);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>de&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),he[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},S.prototype.parseHost=function(e){let t=se.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var _e=e({decode:()=>b,encode:()=>x,format:()=>ae,parse:()=>ge}),ve=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ye=/[\0-\x1F\x7F-\x9F]/,be=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,xe=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Se=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ce=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,we=e({Any:()=>ve,Cc:()=>ye,Cf:()=>be,P:()=>xe,S:()=>Se,Z:()=>Ce}),Te=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Ee=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),De=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Oe=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ke(e){return e>=55296&&e<=57343||e>1114111?65533:De.get(e)??e}var C;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(C||={});var Ae=32,w;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(w||={});function je(e){return e>=C.ZERO&&e<=C.NINE}function Me(e){return e>=C.UPPER_A&&e<=C.UPPER_F||e>=C.LOWER_A&&e<=C.LOWER_F}function Ne(e){return e>=C.UPPER_A&&e<=C.UPPER_Z||e>=C.LOWER_A&&e<=C.LOWER_Z||je(e)}function Pe(e){return e===C.EQUALS||Ne(e)}var T;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(T||={});var E;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(E||={});var Fe=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=T.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=E.Strict}startEntity(e){this.decodeMode=e,this.state=T.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case T.EntityStart:return e.charCodeAt(t)===C.NUM?(this.state=T.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=T.NamedEntity,this.stateNamedEntity(e,t));case T.NumericStart:return this.stateNumericStart(e,t);case T.NumericDecimal:return this.stateNumericDecimal(e,t);case T.NumericHex:return this.stateNumericHex(e,t);case T.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Ae)===C.LOWER_X?(this.state=T.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=T.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(je(r)||Me(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(je(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===C.SEMI)this.consumed+=1;else if(this.decodeMode===E.Strict)return 0;return this.emitCodePoint(ke(this.result),this.consumed),this.errors&&(e!==C.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&w.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Le(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===E.Attribute&&(i===0||Pe(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&w.VALUE_LENGTH)>>14,i!==0){if(a===C.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==E.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&w.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~w.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case T.NamedEntity:return this.result!==0&&(this.decodeMode!==E.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case T.NumericDecimal:return this.emitNumericEntity(0,2);case T.NumericHex:return this.emitNumericEntity(0,3);case T.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case T.EntityStart:return 0}}};function Ie(e){let t=``,n=new Fe(e,e=>t+=Oe(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Le(e,t,n,r){let i=(t&w.BRANCH_LENGTH)>>7,a=t&w.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Re=Ie(Te);Ie(Ee);function ze(e,t=E.Legacy){return Re(e,t)}function Be(e){return Re(e,E.Strict)}var Ve=e({arrayReplaceAt:()=>Ke,asciiTrim:()=>ct,assign:()=>D,escapeHtml:()=>A,escapeRE:()=>it,fromCodePoint:()=>O,has:()=>Ge,isMdAsciiPunct:()=>P,isPunctChar:()=>at,isPunctCharCode:()=>N,isSpace:()=>j,isString:()=>Ue,isValidEntityCode:()=>qe,isWhiteSpace:()=>M,lib:()=>lt,normalizeReference:()=>ot,unescapeAll:()=>k,unescapeMd:()=>Qe});function He(e){return Object.prototype.toString.call(e)}function Ue(e){return He(e)===`[object String]`}var We=Object.prototype.hasOwnProperty;function Ge(e,t){return We.call(e,t)}function D(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Ke(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function qe(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function O(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Je=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ye=RegExp(Je.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Xe=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Ze(e,t){if(t.charCodeAt(0)===35&&Xe.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return qe(n)?O(n):e}let n=ze(e);return n===e?e:n}function Qe(e){return e.indexOf(`\\`)<0?e:e.replace(Je,`$1`)}function k(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Ye,function(e,t,n){return t||Ze(e,n)})}var $e=/[&<>"]/,et=/[&<>"]/g,tt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function nt(e){return tt[e]}function A(e){return $e.test(e)?e.replace(et,nt):e}var rt=/[.?*+^$[\]\\(){}|-]/g;function it(e){return e.replace(rt,`\\$&`)}function j(e){switch(e){case 9:case 32:return!0}return!1}function M(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function at(e){return xe.test(e)||Se.test(e)}function N(e){return at(O(e))}function P(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ot(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function st(e){return e===32||e===9||e===10||e===13}function ct(e){let t=0;for(;t<e.length&&st(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&st(e.charCodeAt(n));n--);return e.slice(t,n+1)}var lt={mdurl:_e,ucmicro:we};function ut(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function dt(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=k(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=k(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function ft(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=k(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=k(e.slice(t,a)),o}var pt=e({parseLinkDestination:()=>dt,parseLinkLabel:()=>ut,parseLinkTitle:()=>ft}),F={};F.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+A(a.content)+`</code>`},F.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+A(e[t].content)+`</code></pre>
`},F.fence=function(e,t,n,r,i){let a=e[t],o=a.info?k(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||A(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},F.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},F.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},F.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},F.text=function(e,t){return A(e[t].content)},F.html_block=function(e,t){return e[t].content},F.html_inline=function(e,t){return e[t].content};function I(){this.rules=D({},F)}I.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+A(e.attrs[t][0])+`="`+A(e.attrs[t][1])+`"`;return r},I.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},I.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},I.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},I.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function L(){this.__rules__=[],this.__cache__=null}L.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},L.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},L.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},L.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},L.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},L.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},L.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},L.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},L.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},L.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function R(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}R.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},R.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},R.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},R.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},R.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function mt(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}mt.prototype.Token=R;var ht=/\r\n?|\n/g,gt=/\0/g;function _t(e){let t;t=e.src.replace(ht,`
`),t=t.replace(gt,`�`),e.src=t}function vt(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function yt(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function bt(e){return/^<a[>\s]/i.test(e)}function xt(e){return/^<\/a\s*>/i.test(e)}function St(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(bt(o.content)&&i>0&&i--,xt(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Ke(r,a,c)}}}}var Ct=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,wt=/\((c|tm|r)\)/i,Tt=/\((c|tm|r)\)/gi,Et={c:`©`,r:`®`,tm:`™`};function Dt(e,t){return Et[t.toLowerCase()]}function Ot(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(Tt,Dt)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function kt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Ct.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function At(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(wt.test(e.tokens[t].content)&&Ot(e.tokens[t].children),Ct.test(e.tokens[t].content)&&kt(e.tokens[t].children))}var jt=/['"]/,Mt=/['"]/g,Nt=`’`;function z(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function Pt(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function Ft(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){Mt.lastIndex=l;let o=Mt.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=P(m)||N(m),_=P(h)||N(h),v=M(m),y=M(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&z(i,a,o.index,Nt);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),z(i,a,o.index,c),z(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&z(i,a,o.index,Nt)}}Object.keys(i).forEach(function(t){e[t].content=Pt(e[t].content,i[t])})}function It(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!jt.test(e.tokens[t].content)||Ft(e.tokens[t].children,e)}function Lt(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Rt=[[`normalize`,_t],[`block`,vt],[`inline`,yt],[`linkify`,St],[`replacements`,At],[`smartquotes`,It],[`text_join`,Lt]];function zt(){this.ruler=new L;for(let e=0;e<Rt.length;e++)this.ruler.push(Rt[e][0],Rt[e][1])}zt.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},zt.prototype.State=mt;function B(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(j(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}B.prototype.push=function(e,t,n){let r=new R(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},B.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},B.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},B.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&j(this.src.charCodeAt(e));e++);return e},B.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!j(this.src.charCodeAt(--e)))return e+1;return e},B.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},B.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},B.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(j(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},B.prototype.Token=R;var Bt=65536;function Vt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Ht(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Ut(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!j(s)||o===45&&j(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!j(t))return!1;a++}let c=Vt(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=Vt(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Ht(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=Vt(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Ht(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Bt))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Wt(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Gt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+(f?1:0);let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Kt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(j(t))t===9?o+=4-(o+e.bsCount[m]+(r?1:0))%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+(n?1:0),l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function qt(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!j(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Jt(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!j(e.src.charCodeAt(r))?-1:r}function Yt(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!j(a))?-1:i}function Xt(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Zt(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Yt(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Jt(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,ee=e.tShift[c],te=e.sCount[c],ne=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ne,e.tShift[c]=ee,e.sCount[c]=te,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let b=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){b=!0;break}if(b)break;if(d){if(p=Yt(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Jt(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Xt(e,h),!0}function Qt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!j(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!j(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&j(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&j(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=ot(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var $t=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),en=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,tn=RegExp(`^(?:`+en+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),nn=RegExp(`^(?:`+en+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),V=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+$t.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(nn.source+`\\s*$`),/^$/,!1]];function rn(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<V.length&&!V[s][0].test(o);s++);if(s===V.length)return!1;if(r)return V[s][2];let c=t+1,l=V[s][1].test(``);if(!V[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),V[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function an(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!j(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&j(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=ct(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function on(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=ct(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function sn(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=ct(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var H=[[`table`,Ut,[`paragraph`,`reference`]],[`code`,Wt],[`fence`,Gt,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Kt,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,qt,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Zt,[`paragraph`,`reference`,`blockquote`]],[`reference`,Qt],[`html_block`,rn,[`paragraph`,`reference`,`blockquote`]],[`heading`,an,[`paragraph`,`reference`,`blockquote`]],[`lheading`,on],[`paragraph`,sn]];function U(){this.ruler=new L;for(let e=0;e<H.length;e++)this.ruler.push(H[e][0],H[e][1],{alt:(H[e][2]||[]).slice()})}U.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},U.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},U.prototype.State=B;function W(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}W.prototype.pushPending=function(){let e=new R(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},W.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new R(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},W.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else (i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else (s&64512)==56320&&(s=65533);let c=P(i)||N(i),l=P(s)||N(s),u=M(i),d=M(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},W.prototype.Token=R;function cn(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ln(e,t){let n=e.pos;for(;n<e.posMax&&!cn(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var un=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function dn(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(un);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function fn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&j(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var pn=[];for(let e=0;e<256;e++)pn.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){pn[e.charCodeAt(0)]=1});function mn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),j(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&pn[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function hn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function gn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function _n(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function vn(e){let t=e.tokens_meta,n=e.tokens_meta.length;_n(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&_n(e,t[r].delimiters)}var yn={tokenize:gn,postProcess:vn};function bn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function xn(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function Sn(e){let t=e.tokens_meta,n=e.tokens_meta.length;xn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&xn(e,t[r].delimiters)}var Cn={tokenize:bn,postProcess:Sn};function wn(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!j(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!j(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!j(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[ot(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function Tn(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!j(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!j(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!j(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[ot(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var En=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Dn=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function On(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Dn.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(En.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function kn(e){return/^<a[>\s]/i.test(e)}function An(e){return/^<\/a\s*>/i.test(e)}function jn(e){let t=e|32;return t>=97&&t<=122}function Mn(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!jn(i))return!1;let a=e.src.slice(r).match(tn);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],kn(t.content)&&e.linkLevel++,An(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var Nn=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Pn=/^&([a-z][a-z0-9]{1,31});/i;function Fn(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(Nn);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=qe(t)?O(t):O(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Pn);if(r){let n=Be(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function In(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Ln(e){let t=e.tokens_meta,n=e.tokens_meta.length;In(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&In(t[e].delimiters)}function Rn(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var zn=[[`text`,ln],[`linkify`,dn],[`newline`,fn],[`escape`,mn],[`backticks`,hn],[`strikethrough`,yn.tokenize],[`emphasis`,Cn.tokenize],[`link`,wn],[`image`,Tn],[`autolink`,On],[`html_inline`,Mn],[`entity`,Fn]],Bn=[[`balance_pairs`,Ln],[`strikethrough`,yn.postProcess],[`emphasis`,Cn.postProcess],[`fragments_join`,Rn]];function G(){this.ruler=new L;for(let e=0;e<zn.length;e++)this.ruler.push(zn[e][0],zn[e][1]);this.ruler2=new L;for(let e=0;e<Bn.length;e++)this.ruler2.push(Bn[e][0],Bn[e][1])}G.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},G.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},G.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},G.prototype.State=W;function Vn(e){let t={};e||={},t.src_Any=ve.source,t.src_Cc=ye.source,t.src_Z=Ce.source,t.src_P=xe.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!`+n+`|`+t.src_ZPCc+`)`+t.src_Any+`)`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!`+t.src_ZCc+`|[@/\\[\\]()]).)+@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|`+n+`|`+t.src_ZPCc+`)(?!`+(e[`---`]?`-(?!--)|`:`-|`)+`_|:\\d|\\.-|\\.(?!$|`+t.src_ZPCc+`))`,t.src_path=`(?:[/?#](?:(?!`+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+`|\\]).)*\\]|\\((?:(?!`+t.src_ZCc+`|[)]).)*\\)|\\{(?:(?!`+t.src_ZCc+`|[}]).)*\\}|\\"(?:(?!`+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+`|[']).)+\\'|\\'(?=`+t.src_pseudo_letter+`|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!`+t.src_ZCc+`|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!`+t.src_ZCc+`|$)|;(?!`+t.src_ZCc+`|$)|\\!+(?!`+t.src_ZCc+`|[!]|$)|\\?(?!`+t.src_ZCc+`|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|`+t.src_pseudo_letter+`{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:`+t.src_pseudo_letter+`)|(?:`+t.src_pseudo_letter+`(?:-|`+t.src_pseudo_letter+`){0,61}`+t.src_pseudo_letter+`))`,t.src_host=`(?:(?:(?:(?:`+t.src_domain+`)\\.)*`+t.src_domain+`))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:`+t.src_ZPCc+`|>|$))`,t.tpl_email_fuzzy=`(^|`+n+`|"|\\(|`+t.src_ZCc+`)(`+t.src_email_name+`@`+t.tpl_host_fuzzy_strict+`)`,t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+`)`,t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+`)`,t}function Hn(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Un(e){return Object.prototype.toString.call(e)}function Wn(e){return Un(e)===`[object String]`}function Gn(e){return Un(e)===`[object Object]`}function Kn(e){return Un(e)===`[object RegExp]`}function qn(e){return Un(e)===`[object Function]`}function Jn(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var Yn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Xn(e){return Object.keys(e||{}).reduce(function(e,t){return e||Yn.hasOwnProperty(t)},!1)}var Zn={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/`+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:`+n.re.src_domain+`)\\.)+`+n.re.src_domain_root+`)`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^`+n.re.src_email_name+`@`+n.re.src_host_strict,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Qn=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,$n=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function er(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function tr(){return function(e,t){t.normalize(e)}}function nr(e){let t=e.re=Vn(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Qn),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "`+e+`": `+t)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Gn(n)){Kn(n.validate)?r.validate=er(n.validate):qn(n.validate)?r.validate=n.validate:a(t,n),qn(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=tr();return}if(Wn(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:tr()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Jn).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`ig`),e.re.schema_at_start=RegExp(`^`+e.re.schema_search.source,`i`),e.re.pretest=RegExp(`(`+e.re.schema_test.source+`)|(`+e.re.host_fuzzy_test.source+`)|@`,`i`)}function rr(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function K(e,t){if(!(this instanceof K))return new K(e,t);t||Xn(e)&&(t=e,e={}),this.__opts__=Hn({},Yn,t),this.__schemas__=Hn({},Zn,e),this.__compiled__={},this.__tlds__=$n,this.__tlds_replaced__=!1,this.re={},nr(this)}K.prototype.add=function(e,t){return this.__schemas__[e]=t,nr(this),this},K.prototype.set=function(e){return this.__opts__=Hn(this.__opts__,e),this},K.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},K.prototype.pretest=function(e){return this.re.pretest.test(e)},K.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},K.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new rr(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},K.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new rr(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},K.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),nr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,nr(this),this)},K.prototype.normalize=function(e){e.schema||(e.url=`http://`+e.url),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:`+e.url)},K.prototype.onCompile=function(){};var q=2147483647,J=36,ir=1,Y=26,ar=38,or=700,sr=72,cr=128,lr=`-`,ur=/^xn--/,dr=/[^\0-\x7F]/,fr=/[\x2E\u3002\uFF0E\uFF61]/g,pr={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},mr=J-ir,X=Math.floor,hr=String.fromCharCode;function Z(e){throw RangeError(pr[e])}function gr(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function _r(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(fr,`.`);let i=gr(e.split(`.`),t).join(`.`);return r+i}function vr(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var yr=e=>String.fromCodePoint(...e),br=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:J},xr=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Sr=function(e,t,n){let r=0;for(e=n?X(e/or):e>>1,e+=X(e/t);e>mr*Y>>1;r+=J)e=X(e/mr);return X(r+(mr+1)*e/(e+ar))},Cr=function(e){let t=[],n=e.length,r=0,i=cr,a=sr,o=e.lastIndexOf(lr);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Z(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=J;;i+=J){s>=n&&Z(`invalid-input`);let o=br(e.charCodeAt(s++));o>=J&&Z(`invalid-input`),o>X((q-r)/t)&&Z(`overflow`),r+=o*t;let c=i<=a?ir:i>=a+Y?Y:i-a;if(o<c)break;let l=J-c;t>X(q/l)&&Z(`overflow`),t*=l}let c=t.length+1;a=Sr(r-o,c,o==0),X(r/c)>q-i&&Z(`overflow`),i+=X(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},wr=function(e){let t=[];e=vr(e);let n=e.length,r=cr,i=0,a=sr;for(let n of e)n<128&&t.push(hr(n));let o=t.length,s=o;for(o&&t.push(lr);s<n;){let n=q;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>X((q-i)/c)&&Z(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>q&&Z(`overflow`),n===r){let e=i;for(let n=J;;n+=J){let r=n<=a?ir:n>=a+Y?Y:n-a;if(e<r)break;let i=e-r,o=J-r;t.push(hr(xr(r+i%o,0))),e=X(i/o)}t.push(hr(xr(e,0))),a=Sr(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Tr={version:`2.3.1`,ucs2:{decode:vr,encode:yr},decode:Cr,encode:wr,toASCII:function(e){return _r(e,function(e){return dr.test(e)?`xn--`+wr(e):e})},toUnicode:function(e){return _r(e,function(e){return ur.test(e)?Cr(e.slice(4).toLowerCase()):e})}},Er={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Dr=/^(vbscript|javascript|file|data):/,Or=/^data:image\/(gif|png|jpeg|webp);/;function kr(e){let t=e.trim().toLowerCase();return Dr.test(t)?Or.test(t):!0}var Ar=[`http:`,`https:`,`mailto:`];function jr(e){let t=ge(e,!0);if(t.hostname&&(!t.protocol||Ar.indexOf(t.protocol)>=0))try{t.hostname=Tr.toASCII(t.hostname)}catch{}return x(ae(t))}function Mr(e){let t=ge(e,!0);if(t.hostname&&(!t.protocol||Ar.indexOf(t.protocol)>=0))try{t.hostname=Tr.toUnicode(t.hostname)}catch{}return b(ae(t),b.defaultChars+`%`)}function Q(e,t){if(!(this instanceof Q))return new Q(e,t);t||Ue(e)||(t=e||{},e=`default`),this.inline=new G,this.block=new U,this.core=new zt,this.renderer=new I,this.linkify=new K,this.validateLink=kr,this.normalizeLink=jr,this.normalizeLinkText=Mr,this.utils=Ve,this.helpers=D({},pt),this.options={},this.configure(e),t&&this.set(t)}Q.prototype.set=function(e){return D(this.options,e),this},Q.prototype.configure=function(e){let t=this;if(Ue(e)){let t=e;if(e=Er[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},Q.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},Q.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},Q.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Q.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},Q.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},Q.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},Q.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Nr={...Object.assign({"../content/blog/en/2026-06-02-a-year-chasing-ai.md":t,"../content/blog/en/2026-06-03-from-all-hands-builder-to-ai-native.md":n,"../content/blog/en/2026-06-04-colaos-windows-sandbox-design-evolution.md":r,"../content/blog/en/2026-06-05-some-thoughts-on-pnpm-audit-fix.md":i,"../content/blog/en/2026-06-06-quality-signals-in-ai-agent-projects.md":a,"../content/blog/en/2026-06-07-agent-harness-engineering-practice.md":o,"../content/blog/en/2026-06-07-vibe-cola-mod-design.md":s,"../content/blog/en/2026-06-08-prompt-caching-for-agents.md":c,"../content/blog/en/2026-06-09-giving-an-agent-a-self.md":l,"../content/blog/en/2026-06-09-stop-asking-the-agent-to-remember.md":u}),...Object.assign({"../content/blog/zh/2026-06-02-a-year-chasing-ai.md":d,"../content/blog/zh/2026-06-03-from-all-hands-builder-to-ai-native.md":f,"../content/blog/zh/2026-06-04-colaos-windows-sandbox-design-evolution.md":p,"../content/blog/zh/2026-06-05-some-thoughts-on-pnpm-audit-fix.md":m,"../content/blog/zh/2026-06-06-quality-signals-in-ai-agent-projects.md":h,"../content/blog/zh/2026-06-07-agent-harness-engineering-practice.md":g,"../content/blog/zh/2026-06-07-vibe-cola-mod-design.md":_,"../content/blog/zh/2026-06-08-prompt-caching-for-agents.md":v,"../content/blog/zh/2026-06-09-giving-an-agent-a-self.md":y,"../content/blog/zh/2026-06-09-stop-asking-the-agent-to-remember.md":ee})};function Pr(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Fr(e){let t=e.trim();return t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`)?t.slice(1,-1):t}function Ir(e){let t=e.trim().slice(1,-1).trim();if(!t)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.map(e=>String(e).trim()).filter(Boolean)}catch{}return t.split(`,`).map(e=>Fr(e.trim())).filter(Boolean)}function Lr(e){let t=e.trim();return t===`true`?!0:t===`false`?!1:t.startsWith(`[`)&&t.endsWith(`]`)?Ir(t):Fr(t)}function Rr(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!t?.[0]||t[1]===void 0)return{data:{},body:e.trim()};let n={},r=t[1].split(/\r?\n/);for(let e=0;e<r.length;e++){let t=r[e].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);if(!t?.[1])continue;let i=t[1],a=t[2]??``;if(a.trim()===``){let t=[];for(;e+1<r.length;){let n=r[e+1].match(/^\s*-\s+(.+)$/);if(!n?.[1])break;t.push(Fr(n[1])),e++}n[i]=t;continue}n[i]=Lr(a)}return{data:n,body:e.slice(t[0].length).trim()}}function $(e,t){let n=e[t];return typeof n==`string`&&n.trim()?n.trim():void 0}function zr(e,t){return e[t]===!0}function Br(e,t){let n=e[t];return Array.isArray(n)?n.map(e=>e.trim()).filter(Boolean):typeof n==`string`&&n.trim()?[n.trim()]:[]}function Vr(e){return e.includes(`/content/blog/zh/`)?`zh`:e.includes(`/content/blog/en/`)?`en`:null}function Hr(e){return e.split(`/`).pop().replace(/\.md$/,``).replace(/^\d{4}-\d{2}-\d{2}-/,``)}function Ur(e){return e.trim().toLowerCase().replace(/['"]/g,``).replace(/[^a-z0-9\u4e00-\u9fa5]+/g,`-`).replace(/^-+|-+$/g,``)}function Wr(e){return e.replace(/```[\s\S]*?```/g,` `).replace(/!\[[^\]]*]\([^)]*\)/g,` `).replace(/\[([^\]]+)]\([^)]*\)/g,`$1`).replace(/[#>*_`~-]+/g,` `).replace(/\s+/g,` `).trim()}function Gr(e){let t=Wr(e);return t.length<=180?t:`${t.slice(0,177).trim()}...`}function Kr(e,t){let n=Wr(e),r=(n.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length??0)+(n.match(/[\u3400-\u9fff]/g)?.length??0)/2,i=Math.max(1,Math.ceil(r/220));return t===`zh`?`${i} 分钟阅读`:`${i} min read`}function qr(e){return e.children?.length?e.children.map(qr).join(``):e.content}function Jr(e){return e.startsWith(`https://`)||e.startsWith(`http://`)}function Yr(){let e=new Q({html:!1,linkify:!0,typographer:!1,langPrefix:`language-`});e.core.ruler.push(`heading_ids`,e=>{for(let t=0;t<e.tokens.length;t++){let n=e.tokens[t];if(n.type!==`heading_open`)continue;let r=e.tokens[t+1];if(!r||r.type!==`inline`)continue;let i=Ur(qr(r));i&&n.attrSet(`id`,i)}});let t=e.renderer.rules.fence;e.renderer.rules.fence=(e,n,r,i,a)=>{let o=e[n];return(o.info.trim().split(/\s+/)[0]?.toLowerCase()??``)===`mermaid`?`<div class="mermaid">${Pr(o.content)}</div>\n`:t?t(e,n,r,i,a):a.renderToken(e,n,r)};let n=e.renderer.rules.link_open;e.renderer.rules.link_open=(e,t,r,i,a)=>{let o=e[t];return Jr(o.attrGet(`href`)??``)&&(o.attrSet(`target`,`_blank`),o.attrSet(`rel`,`noopener`)),n?n(e,t,r,i,a):a.renderToken(e,t,r)};let r=e.renderer.rules.image;return e.renderer.rules.image=(e,t,n,i,a)=>(e[t].attrSet(`loading`,`lazy`),r?r(e,t,n,i,a):a.renderToken(e,t,n)),e}var Xr=Yr();function Zr(e){return Xr.render(e)}function Qr(e,t){let n=Vr(e);if(!n)return null;let{data:r,body:i}=Rr(t),a=$(r,`slug`)??Hr(e),o=$(r,`title`)??a.replace(/[-_]+/g,` `),s=$(r,`description`)??$(r,`excerpt`)??Gr(i),c=$(r,`date`)??$(r,`published`)??``,l=Br(r,`tags`);return{slug:a,locale:n,title:o,description:s,date:c,updated:$(r,`updated`),author:$(r,`author`),authorAvatar:$(r,`authorAvatar`),authorUrl:$(r,`authorUrl`),tags:l,cover:$(r,`cover`),draft:zr(r,`draft`),body:i,html:Zr(i),readingTime:Kr(i,n),href:`/cola-website/blog/${encodeURIComponent(a)}/`}}function $r(e,t){let n=Date.parse(e.date)||0,r=Date.parse(t.date)||0;if(n!==r)return r-n;let i=e.slug.localeCompare(t.slug);return i===0?e.title.localeCompare(t.title):i}var ei=Object.entries(Nr).map(([e,t])=>Qr(e,t)).filter(e=>!!e&&!e.draft).sort($r);function ti(e){return ei.filter(t=>t.locale===e)}function ni(e){let t=new Set;for(let n of ti(e))for(let e of n.tags)t.add(e);return[...t].sort((e,t)=>e.localeCompare(t))}function ri(e,t){return ei.find(n=>n.slug===e&&n.locale===t)??ei.find(t=>t.slug===e)}function ii(e){let t=ti(e.locale),n=t.findIndex(t=>t.slug===e.slug);return{previous:n>0?t[n-1]:void 0,next:n>=0?t[n+1]:void 0}}function ai(e,t){if(!e)return t===`zh`?`未发布`:`Unpublished`;let n=new Date(e);return Number.isNaN(n.getTime())?e:new Intl.DateTimeFormat(t===`zh`?`zh-CN`:`en-US`,{year:`numeric`,month:`short`,day:`numeric`}).format(n)}export{ni as a,ti as i,ii as n,ri as r,ai as t};