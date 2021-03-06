PGDMP                           y         	   credibook     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16467 	   credibook    DATABASE     {   CREATE DATABASE credibook WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE credibook;
                postgres    false            ?            1259    16503    transactions    TABLE     N  CREATE TABLE public.transactions (
    id integer NOT NULL,
    amount numeric,
    notes character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp with time zone,
    created_by integer,
    updated_by integer,
    deleted_by integer,
    type character varying
);
     DROP TABLE public.transactions;
       public         heap    postgres    false            ?            1259    16501    transactions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.transactions_id_seq;
       public          postgres    false    209            ?           0    0    transactions_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;
          public          postgres    false    208                       2604    16506    transactions id    DEFAULT     r   ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);
 >   ALTER TABLE public.transactions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            ?          0    16503    transactions 
   TABLE DATA           ?   COPY public.transactions (id, amount, notes, created_at, updated_at, deleted_at, created_by, updated_by, deleted_by, type) FROM stdin;
    public          postgres    false    209   .       ?           0    0    transactions_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.transactions_id_seq', 19, true);
          public          postgres    false    208                       2606    16511    transactions transactions_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transactions_pkey;
       public            postgres    false    209            ?   R  x???KO?@ ???+????Y??{?Ħ?jzɦ`[ %D??к?BS,$&|̫Ȑ???m?.?2s9?a???Va????[=6??????y?q??!PA4L??H̋w?@?P?P6???Q?}U?[?e_?wlD???MD?}8?!~)WiTh??K?P??}?7??W???h^^????E??A????TT'j??3??Ё3???B'TN@??V????d?v???ve1A???Q???J'8^?uO??zK??P???A,˓bg,ɤMŦ?,_?j???j?[R???	??З?1????>?????P???-??-?&P???ҳNݧ:?7?;?[?q???8c     