PGDMP     :                     y         	   credibook     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     12.6 (Ubuntu 12.6-1.pgdg20.04+1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16467 	   credibook    DATABASE     {   CREATE DATABASE credibook WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE credibook;
                postgres    false            ?            1259    16481    users    TABLE     ?  CREATE TABLE public.users (
    id integer NOT NULL,
    id_role integer,
    email character varying(255),
    password character varying(255),
    username character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    mobile_number numeric,
    status boolean,
    created_at timestamp with time zone,
    deleted_at timestamp with time zone,
    created_by integer,
    deleted_by integer
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16479    user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    205            ?           0    0    user_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
          public          postgres    false    204                       2604    16484    users id    DEFAULT     c   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            ?          0    16481    users 
   TABLE DATA           ?   COPY public.users (id, id_role, email, password, username, firstname, lastname, mobile_number, status, created_at, deleted_at, created_by, deleted_by) FROM stdin;
    public          postgres    false    205          ?           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 6, true);
          public          postgres    false    204                       2606    16489    users user_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    205            ?   ?  x?u??r?@?5<?wS????3x?h` Sو????@P?~????ZՋӽ????4? 7??? ?{??V?0?&\yu?*??"?{??Θ??l̰?E?Y??a?։1
?m???hҽ?]?kjBD?? ??C ? ?@ZMa??_??}??ã?'?7?ں-X?p;?ek3?YN\!????????$Y?<???Ҭ?AW???)?%!?@??3??L??U?c?A?l?ۇ???? &v/{?B???	s06??Z?8??Ȉ???Cb?]R????̟??????m?KG??E??Ʀ|????Z??/G?$?o??n?n?55???Z???9??v??JfE??Ћ?~7??sS??!yZ?{?ˆ????;??a?a??%1K-?mfC???L??v?'V]!?dV??Y???e??:?????z%zBF??L????N????Tk?in?\?v?A!?6???lRёǺF??????C?y?ڐ
&     